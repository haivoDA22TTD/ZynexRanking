export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Game Rankings
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Thống kê và xếp hạng các game miễn phí tốt nhất. Cập nhật liên tục từ FreeToGame API.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.freetogame.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  FreeToGame
                </a>
              </li>
              <li>
                <a
                  href="https://www.freetogame.com/api-doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Thông tin</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Dữ liệu được cung cấp bởi FreeToGame API
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              © 2024 Game Rankings. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Made with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
