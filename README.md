# 🎮 Game Rankings - Thống kê bảng xếp hạng game

Web thống kê và xếp hạng các game miễn phí thời gian thực, lấy dữ liệu từ FreeToGame API.

## ✨ Tính năng

- 🎯 Hiển thị danh sách game miễn phí từ FreeToGame API
- 🎨 Giao diện hiện đại với Tailwind CSS
- 🌙 Dark mode / Light mode
- 📱 Responsive design (mobile, tablet, desktop)
- 🎬 Banner carousel tự động chuyển đổi
- 🔍 Tìm kiếm game theo tên
- 🎮 Lọc theo platform (PC, Browser)
- 🎯 Lọc theo thể loại game
- ✨ Animations mượt mà
- ⚡ Real-time data từ API

## 🛠️ Công nghệ sử dụng

- **React 19** - UI Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **FreeToGame API** - Data source

## 📦 Cài đặt

1. Di chuyển vào thư mục dự án:
```bash
cd game-ranking-app
```

2. Cài đặt dependencies:
```bash
npm install
```

**Lưu ý:** Nếu gặp lỗi với recharts, chạy:
```bash
npm install recharts
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt tại: `http://localhost:5173`

## 🚀 Build cho production

```bash
npm run build
```

## 📁 Cấu trúc dự án

```
game-ranking-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Header với dark mode toggle
│   │   ├── Banner.tsx          # Banner carousel
│   │   ├── FilterBar.tsx       # Bộ lọc và tìm kiếm
│   │   ├── GameCard.tsx        # Card hiển thị game
│   │   ├── Footer.tsx          # Footer
│   │   └── Loading.tsx         # Loading spinner
│   ├── services/
│   │   └── api.ts              # API service
│   ├── types/
│   │   └── game.ts             # TypeScript types
│   ├── App.tsx                 # Main component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json
```

## 🎨 Features chi tiết

### Header
- Logo và tên ứng dụng
- Nút toggle dark/light mode
- Sticky header với blur effect khi scroll

### Banner
- Carousel tự động chuyển đổi mỗi 5 giây
- Hiển thị 5 game nổi bật
- Gradient overlay
- Nút "Chơi ngay" link đến game
- Indicators để chuyển slide thủ công

### Filter Bar
- Tìm kiếm theo tên game
- Lọc theo platform (All, PC, Browser)
- Lọc theo thể loại (50+ genres)

### Game Cards
- Hiển thị thứ hạng
- Thumbnail game
- Tên và mô tả game
- Thể loại và platform tags
- Publisher và năm phát hành
- Nút "Chơi ngay"
- Hover effects với animations

### Footer
- Thông tin về ứng dụng
- Links hữu ích
- Credits

## 🌐 API

Dự án sử dụng [FreeToGame API](https://www.freetogame.com/api-doc)

Endpoints:
- `GET /api/games` - Lấy tất cả games
- `GET /api/games?platform={platform}` - Lọc theo platform
- `GET /api/games?category={category}` - Lọc theo category

## 📝 License

MIT License

## 👨‍💻 Author

Made with haivoDev
