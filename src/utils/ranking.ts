import type { Game, GameWithRanking, PlayerStats } from '../types/game';

// Tính điểm ranking dựa trên nhiều yếu tố
export const calculateRankingScore = (game: Game): number => {
  let score = 0;

  // Điểm theo năm phát hành (game mới hơn = điểm cao hơn)
  const releaseYear = new Date(game.release_date).getFullYear();
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - releaseYear;
  const recencyScore = Math.max(0, 100 - yearDiff * 5); // Giảm 5 điểm mỗi năm
  score += recencyScore * 0.3;

  // Điểm theo thể loại phổ biến
  const popularGenres = ['mmorpg', 'shooter', 'moba', 'battle-royale', 'action'];
  const genreScore = popularGenres.some((g) =>
    game.genre.toLowerCase().includes(g)
  )
    ? 100
    : 50;
  score += genreScore * 0.2;

  // Điểm theo platform (PC thường có nhiều người chơi hơn)
  const platformScore = game.platform.toLowerCase().includes('pc') ? 100 : 70;
  score += platformScore * 0.2;

  // Điểm ngẫu nhiên để tạo sự đa dạng (giả lập popularity)
  const randomScore = Math.random() * 100;
  score += randomScore * 0.3;

  return Math.round(score);
};

// Tạo dữ liệu thống kê người chơi giả lập theo năm
export const generatePlayerStats = (game: Game): PlayerStats[] => {
  const releaseYear = new Date(game.release_date).getFullYear();
  const currentYear = new Date().getFullYear();
  const stats: PlayerStats[] = [];

  // Tạo dữ liệu từ năm phát hành đến hiện tại
  for (let year = releaseYear; year <= currentYear; year++) {
    const yearsSinceRelease = year - releaseYear;
    
    // Mô phỏng chu kỳ người chơi: tăng nhanh đầu, đạt đỉnh, sau đó giảm dần
    let basePlayers = 10000;
    
    if (yearsSinceRelease === 0) {
      // Năm đầu: ít người chơi
      basePlayers = Math.random() * 50000 + 20000;
    } else if (yearsSinceRelease <= 2) {
      // Năm 1-2: tăng trưởng mạnh
      basePlayers = Math.random() * 200000 + 100000;
    } else if (yearsSinceRelease <= 4) {
      // Năm 3-4: đạt đỉnh
      basePlayers = Math.random() * 300000 + 200000;
    } else {
      // Sau đó: giảm dần
      const decayFactor = Math.max(0.3, 1 - (yearsSinceRelease - 4) * 0.1);
      basePlayers = (Math.random() * 200000 + 100000) * decayFactor;
    }

    const players = Math.round(basePlayers);
    const activeUsers = Math.round(players * (0.6 + Math.random() * 0.2)); // 60-80% active
    const newPlayers = Math.round(players * (0.1 + Math.random() * 0.15)); // 10-25% new

    stats.push({
      year,
      players,
      activeUsers,
      newPlayers,
    });
  }

  return stats;
};

// Thêm ranking score vào game
export const addRankingToGames = (games: Game[]): GameWithRanking[] => {
  return games
    .map((game) => ({
      ...game,
      rankingScore: calculateRankingScore(game),
      playerStats: generatePlayerStats(game),
    }))
    .sort((a, b) => b.rankingScore - a.rankingScore); // Sắp xếp theo điểm giảm dần
};
