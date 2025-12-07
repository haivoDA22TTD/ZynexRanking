import type { Game } from '../types/game';


const response = await fetch("https://www.freetogame.com/api/games");


const API_URL = import.meta.env.DEV
  ? "https://www.freetogame.com/api/games"  // dev thì gọi thẳng cho nhanh
  : "/api/games";                           // production thì qua proxy của mình

const response = await fetch(API_URL);
const games = await response.json();

export const gameApi = {
  getAllGames: async (): Promise<Game[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/games`, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch games');
      return response.json();
    } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
    }
  },

  getGamesByPlatform: async (platform: string): Promise<Game[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/games?platform=${platform}`, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch games');
      return response.json();
    } catch (error) {
      console.error('Error fetching games by platform:', error);
      throw error;
    }
  },

  getGamesByCategory: async (category: string): Promise<Game[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/games?category=${category}`, {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch games');
      return response.json();
    } catch (error) {
      console.error('Error fetching games by category:', error);
      throw error;
    }
  },
};
