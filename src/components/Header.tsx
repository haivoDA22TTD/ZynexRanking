import { useState, useEffect } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-slide-down">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🎮</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Game Rankings
            </h1>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-2xl">☀️</span>
            ) : (
              <span className="text-2xl">🌙</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
