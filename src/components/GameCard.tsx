import type { GameWithRanking } from '../types/game';

interface GameCardProps {
  game: GameWithRanking;
  rank: number;
  onClick: () => void;
}

export default function GameCard({ game, rank, onClick }: GameCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in cursor-pointer"
    >
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">#{rank}</span>
        </div>
        <div className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg">
          {game.rankingScore}
        </div>
      </div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 flex-1">
            {game.title}
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {game.short_description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md text-xs font-semibold">
            {game.genre}
          </span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-xs font-semibold">
            {game.platform}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span>{game.publisher}</span>
          <span>{new Date(game.release_date).getFullYear()}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="block w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
