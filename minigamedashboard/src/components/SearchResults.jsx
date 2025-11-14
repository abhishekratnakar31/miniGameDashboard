import { motion } from "framer-motion";

export default function SearchResults({ results, onSelect }) {
  if (!results?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded-lg mt-2 p-2 z-20 max-h-80 overflow-y-auto shadow-xl"
    >
      {results.map((game) => (
        <div
          key={game.id}
          onClick={() => onSelect(game)}
          className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <img
            src={game.background_image}
            alt={game.name}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <h3 className="text-sm font-semibold">{game.name}</h3>
            <p className="text-xs text-gray-400">Rating: {game.rating}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
