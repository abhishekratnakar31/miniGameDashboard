export const RAWG_BASE = "https://api.rawg.io/api";

export const trendingGamesURL = 
  `${RAWG_BASE}/games?key=${import.meta.env.VITE_RAWG_KEY}&ordering=-rating&page_size=12`;
