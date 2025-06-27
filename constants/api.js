const api = {
  key: "894f24606a8d4f78f4d9608a39d689d1",
  baseUrl: "https://api.themoviedb.org/3",
  discoverMovies: "/discover/movie?sort_by=popularity.desc&api_key=",
  searchMovies: "/search/movie?api_key=",
  movieDetails: "/movie/",
  imageBaseUrl: "https://image.tmdb.org/t/p/w500",
  genres: "/genre/movie/list?language=en&api_key=",
};
export default Object.freeze(api);
