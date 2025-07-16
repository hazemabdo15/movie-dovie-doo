# 🎬 Movie Discovery App

A feature-rich React Native mobile application for discovering and exploring movies using The Movie Database (TMDB) API.

## ✨ Features

### Core Functionality
- **Movie Discovery**: Browse trending and popular movies
- **Advanced Search**: Search movies by title with real-time filtering
- **Genre Filtering**: Filter movies by specific genres (Action, Comedy, Drama, etc.)
- **Favorites System**: Add/remove movies to your personal favorites list
- **Movie Details**: View comprehensive movie information including ratings, release dates, and descriptions

### User Experience
- **Responsive Design**: Optimized for various screen sizes
- **Smooth Navigation**: Intuitive drawer and stack navigation
- **Beautiful UI**: Modern Material Design components
- **Real-time Updates**: Instant search and filter results
- **Persistent Favorites**: Favorites are maintained across app sessions

## 🛠️ Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **React Navigation v6** - Navigation library (Drawer + Stack)
- **React Native Paper** - Material Design components
- **React Context API** - Global state management

### Backend & APIs
- **The Movie Database (TMDB) API** - Movie data and images
- **REST API** - HTTP requests for data fetching

### Development Tools
- **JavaScript (ES6+)** - Programming language
- **React Hooks** - Modern React patterns
- **Expo CLI** - Development and build tools

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── MovieCard.jsx       # Individual movie display card
│   └── SearchField.jsx     # Search input with genre filter
├── screens/
│   ├── Home.jsx           # Main movie listing screen
│   ├── Details.jsx        # Movie details screen
│   └── Favourite.jsx      # Favorites listing screen
├── navigation/
│   ├── dynamicDrawer.js   # Drawer navigation setup
│   └── dynamicNativeStack.js # Stack navigation setup
├── context/
│   ├── moviesContextProvider.js    # Movies and genres state
│   └── favoritesContextProvider.js # Favorites state management
├── constants/
│   └── api.js             # API configuration
└── utils/
    └── colorsPallete.js   # App color scheme
```

### State Management
- **Movies Context**: Manages movie data and genres from TMDB API
- **Favorites Context**: Handles user's favorite movies list
- **Local State**: Component-specific state for UI interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- TMDB API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-discovery-app.git
   cd movie-discovery-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup API Configuration**
   - Get your API key from [TMDB](https://www.themoviedb.org/settings/api)
   - Create/update `constants/api.js` with your API credentials:
   ```javascript
   const api = {
     baseUrl: "https://api.themoviedb.org/3",
     token: "YOUR_TMDB_API_TOKEN",
     imageBaseUrl: "https://image.tmdb.org/t/p/w500",
     // ... other configurations
   };
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on device/simulator**
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator

## 📖 Usage

### Main Features

1. **Browse Movies**: Scroll through the home screen to discover movies
2. **Search**: Use the search bar to find specific movies by title
3. **Filter by Genre**: Select a genre from the dropdown to filter movies
4. **Add to Favorites**: Tap the heart icon on any movie card
5. **View Details**: Tap on a movie card to see detailed information
6. **Access Favorites**: Use the drawer navigation to view your favorites

### Navigation
- **Drawer Menu**: Access different sections (Home, Favorites)
- **Movie Details**: Tap any movie card to view full details
- **Back Navigation**: Use native back gestures or navigation buttons

## 🎨 Design Highlights

### Visual Features
- **Movie Cards**: Beautiful cards with poster, backdrop, and movie info
- **Responsive Layout**: Adapts to different screen sizes
- **Color Scheme**: Consistent color palette throughout the app
- **Typography**: Clear, readable text with proper hierarchy
- **Icons**: Intuitive Material Design icons

### User Experience
- **Smooth Animations**: Natural transitions between screens
- **Loading States**: Visual feedback during data fetching
- **Error Handling**: Graceful handling of network issues
- **Accessibility**: Screen reader support and proper contrast

## 🔧 Configuration

### App Configuration (`app.json`)
```json
{
  "expo": {
    "name": "movie-dovie-doo",
    "slug": "movie-app",
    "version": "1.0.0",
    "orientation": "portrait"
  }
}
```

### API Configuration
The app uses TMDB API for:
- Movie discovery and search
- Genre information
- Movie details and ratings
- High-quality movie posters and backdrops

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React Native Paper](https://reactnativepaper.com/) for Material Design components
- [React Navigation](https://reactnavigation.org/) for navigation solutions
- [Expo](https://expo.dev/) for development tools and platform

## 📞 Contact

**Your Name** - hazemabdulrahman99@gmail.com

Project Link: [https://github.com/hazemabdo15/movie-dovie-doo.git](https://github.com/hazemabdo15/movie-dovie-doo.git)

---

⭐ **If you found this project helpful, please give it a star!** ⭐
