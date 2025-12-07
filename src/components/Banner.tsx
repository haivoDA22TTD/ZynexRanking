import { useState, useEffect } from 'react';
import type { GameWithRanking } from '../types/game';

interface BannerProps {
  games: GameWithRanking[];
}

export default function Banner({ games }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredGames = games.slice(0, 5);

  useEffect(() => {
    if (featuredGames.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredGames.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredGames.length]);

  if (featuredGames.length === 0) return null;

  const currentGame = featuredGames[currentIndex];

  return (
    <div className="relative h-[500px] overflow-hidden rounded-2xl mt-20 animate-fade-in">
      <div className="absolute inset-0">
        <img
          src={currentGame.thumbnail}
          alt={currentGame.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container mx-auto">
          <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm font-semibold mb-3 animate-scale-in">
            {currentGame.genre}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 animate-slide-up">
            {currentGame.title}
          </h2>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl animate-slide-up">
            {currentGame.short_description}
          </p>
          <div className="flex items-center space-x-4 animate-slide-up">
            <a
              href={currentGame.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Chơi ngay
            </a>
            <span className="text-gray-300">
              {currentGame.platform} • {currentGame.publisher}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
