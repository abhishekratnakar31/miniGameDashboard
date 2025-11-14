export const RAWG_BASE = "https://api.rawg.io/api";

export const trendingGamesURL = 
  `${RAWG_BASE}/games?key=${import.meta.env.VITE_RAWG_KEY}&ordering=-rating&page_size=12`;

export const searchGamesURL = (query) =>
  `${RAWG_BASE}/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${query}&page_size=8`;