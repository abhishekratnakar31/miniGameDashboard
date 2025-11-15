import { useState } from "react";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { trendingGamesURL } from "../utils/rawg";
import GameModal from "../components/GameModal";
import { Skiper47 } from "../components/Skiper47";

export default function TrendingSection() {
  const { data, loading, error } = useFetch(trendingGamesURL);

  const [selected, setSelected] = useState(null);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  function toggleFavorite(game) {
    let updated = [];

    if (favorites.some((fav) => fav.id === game.id)) {
      updated = favorites.filter((fav) => fav.id !== game.id);
    } else {
      updated = [...favorites, game];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  // 🔥 FETCH FULL GAME DETAILS FOR MODAL
  async function fetchFullDetails(id) {
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_KEY}`
      );
      const fullData = await res.json();
      setSelected(fullData); // open modal with full data
    } catch (err) {
      console.error("Failed to fetch full details:", err);
    }
  }

  if (loading) return <div className="text-gray-400">Loading trending games...</div>;
  if (error) return <div className="text-red-500">Error fetching games.</div>;

  const games = data?.results || [];

  const images = games.map((g) => ({
    src: g.background_image,
    alt: g.name,
    game: g, // include game object to toggle favorites
  }));

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold">Trending Games</h2>

      {/* 🔥 CAROUSEL WITH CLICK + FAVORITES */}
      <Skiper47
        images={images}
        favorites={favorites}
        onFavoriteToggle={toggleFavorite}
        onGameClick={(g) => fetchFullDetails(g.id)}
      />

      {/* 🔥 POPUP MODAL WITH FULL DETAILS */}
      {selected && <GameModal game={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
