# 🎬 Netflix Clone - Premium React Experience

A high-performance Netflix clone built with **React**, **TypeScript**, and **Vite**. This project features a fluid UI, real-time data from the **TMDB API**, and a premium design aesthetic following Netflix's signature look.

![Netflix Clone Preview](https://links.papareact.com/b6y) <!-- Placeholder for a real screenshot if available -->

## 🚀 Key Features

- **Dynamic Hero Section**: Showcases a random trending movie or series with an immersive background and descriptions.
- **Smart Navigation**: Categorized views for **Home**, **Series**, and **Movies** that dynamically filter content.
- **Content Carousels**: Multiple horizontal rows for genres like Trending, Top Rated, Action, Horror, and many more.
- **Interactive Modals**: Detailed movie overlays with descriptions, release dates, and high-quality backdrops.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile viewing.
- **Defensive API Layer**: Robust error handling and data validation to ensure a smooth user experience even with API fluctuations.

## 🛠️ Built With

- **React 18** - UI Library
- **TypeScript** - For type-safe development
- **Vite** - Lightning-fast build tool
- **Axios** - For API requests
- **Lucide React** - Premium iconography
- **CSS3 (Vanilla)** - Custom modern styling with glassmorphism and animations

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your TMDB API credentials:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original/
```

> [!IMPORTANT]
> You can get a free API key at [themoviedb.org](https://www.themoviedb.org/documentation/api).

### 4. Run the development server
```bash
npm run dev
```

## 📂 Project Structure

- `src/components/`: Reusable UI components (Navbar, Hero, Row, MovieModal).
- `src/services/api.ts`: Centralized TMDB API logic and Axios instance.
- `src/types/`: TypeScript definitions for movies and state.
- `src/hooks/`: Custom hooks for data fetching and UI logic.

## 🤝 Contributing

Feel free to fork this project and submit PRs for any improvements or new features!

---
*Created with ❤️ by Antigravity.*
