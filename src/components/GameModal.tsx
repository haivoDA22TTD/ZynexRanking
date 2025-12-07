import { useState } from 'react';
import type { GameWithRanking, ChartType } from '../types/game';
import GameChart from './GameChart';

interface GameModalProps {
  game: GameWithRanking;
  rank: number;
  onClose: () => void;
}

export default function GameModal({ game, rank, onClose }: GameModalProps) {
  const [chartType, setChartType] = useState<ChartType>('bar');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-900/50 hover:bg-gray-900/70 text-white rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
          {/* Header with game image */}
          <div className="relative h-64 md:h-80">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">#{rank}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {game.title}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-purple-600 rounded-full text-white text-sm font-semibold">
                          {game.genre}
                        </span>
                        <span className="px-3 py-1 bg-blue-600 rounded-full text-white text-sm font-semibold">
                          {game.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-yellow-400 text-sm font-semibold mb-1">
                    Điểm xếp hạng
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {game.rankingScore}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Game info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Thông tin game
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Publisher:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {game.publisher}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Developer:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {game.developer}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Ngày phát hành:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {new Date(game.release_date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Platform:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {game.platform}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Mô tả
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {game.short_description}
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href={game.game_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🎮 Chơi ngay
                  </a>
                  <a
                    href={game.freetogame_profile_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-center rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    📄 Chi tiết
                  </a>
                </div>
              </div>
            </div>

            {/* Chart section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  📊 Thống kê người chơi theo năm
                </h3>
                
                <div className="flex space-x-2">
                  {(['bar', 'line', 'area', 'pie'] as ChartType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setChartType(type)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        chartType === type
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {type === 'bar' && '📊 Cột'}
                      {type === 'line' && '📈 Đường'}
                      {type === 'area' && '📉 Vùng'}
                      {type === 'pie' && '🥧 Tròn'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                <GameChart
                  data={game.playerStats || []}
                  chartType={chartType}
                  gameName={game.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
