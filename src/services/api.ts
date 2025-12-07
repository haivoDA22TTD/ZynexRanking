// src/services/api.ts

const GAMES_API_URL = import.meta.env.DEV
  ? "https://www.freetogame.com/api/games"   
  : "/api/games";                            
// Lấy toàn bộ games
export const getAllGames = async () => {
  const res = await fetch(GAMES_API_URL);
  if (!res.ok) throw new Error("Failed to fetch games");
  const data = await res.json();
  return data;
};

export const getGamesByCategory = async (category: string) => {
  const url = import.meta.env.DEV
    ? `https://www.freetogame.com/api/games?category=${category}`
    : `/api/games?category=${category}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch games");
  const data = await res.json();
  return data;
};

export const getGamesByPlatform = async (platform: string) => {
  const url = import.meta.env.DEV
    ? `https://www.freetogame.com/api/games?platform=${platform}`
    : `/api/games?platform=${platform}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
};
