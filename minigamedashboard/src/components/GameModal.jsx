import { motion } from "framer-motion";

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{game.name}</h2>

          <button
            onClick={onClose}
           className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-purple-700 
           transition-all shadow-md hover:shadow-lg"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />

        {/* Platforms */}
        <div className="flex flex-wrap gap-2 mt-4">
          {game.platforms?.map((p, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
            >
              {p.platform.name}
            </span>
          ))}
        </div>

        {/* Ratings + playtime */}
        <div className="mt-4 flex items-center gap-6 text-gray-300">
          <p>⭐ Rating: {game.rating}</p>
          {game.playtime ? <p>⏱ Playtime: {game.playtime} hrs</p> : null}
        </div>

        {/* Description */}
        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          {game.description_raw?.slice(0, 500) || "No description available."}
        </p>

      </motion.div>
    </div>
  );
}
