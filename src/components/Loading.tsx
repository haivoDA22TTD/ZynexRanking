export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-purple-200 dark:border-purple-900 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-semibold">Đang tải game...</p>
      </div>
    </div>
  );
}
