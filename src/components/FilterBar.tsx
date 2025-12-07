interface FilterBarProps {
  selectedPlatform: string;
  selectedGenre: string;
  onPlatformChange: (platform: string) => void;
  onGenreChange: (genre: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const platforms = ['all', 'pc', 'browser'];
const genres = [
  'all',
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts',
];

export default function FilterBar({
  selectedPlatform,
  selectedGenre,
  onPlatformChange,
  onGenreChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-slide-down">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            🔍 Tìm kiếm
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm tên game..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            💻 Platform
          </label>
          <select
            value={selectedPlatform}
            onChange={(e) => onPlatformChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 capitalize"
          >
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform === 'all' ? 'Tất cả' : platform.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            🎯 Thể loại
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 capitalize"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre === 'all' ? 'Tất cả' : genre.replace(/-/g, ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
