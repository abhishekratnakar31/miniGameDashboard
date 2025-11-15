// import { motion } from "framer-motion";

// export default function GameModal({ game, onClose }) {
//   if (!game) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]"
//       >
//         {/* Header */}
//         <div className="flex justify-between items-start">
//           <h2 className="text-2xl font-bold">{game.name}</h2>

//           <button
//             onClick={onClose}
//            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-purple-700 
//            transition-all shadow-md hover:shadow-lg"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Image */}
//         <img
//           src={game.background_image}
//           alt={game.name}
//           className="w-full h-64 object-cover rounded-lg mt-4"
//         />

//         {/* Platforms */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           {game.platforms?.map((p, i) => (
//             <span
//               key={i}
//               className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
//             >
//               {p.platform.name}
//             </span>
//           ))}
//         </div>

//         {/* Ratings + playtime */}
//         <div className="mt-4 flex items-center gap-6 text-gray-300">
//           <p>⭐ Rating: {game.rating}</p>
//           {game.playtime ? <p>⏱ Playtime: {game.playtime} hrs</p> : null}
//         </div>

//         {/* Description */}
//         <p className="text-gray-400 mt-4 text-sm leading-relaxed">
//           {game.description_raw?.slice(0, 500) || "No description available."}
//         </p>

//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-black text-gray-200 w-full max-w-3xl rounded-xl overflow-hidden shadow-xl border border-gray-700"
      >
        {/* IMAGE */}
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-72 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold">{game.name}</h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {game.description_raw
              ? game.description_raw.slice(0, 400) + "..."
              : "No description available for this game."}
          </p>

          {/* EXTRA STATS */}
          <div className="grid grid-cols-2 gap-4 text-sm mt-4">
            <div>
              <span className="text-gray-500">Rating: </span>
              {game.rating}
            </div>

            <div>
              <span className="text-gray-500">Metacritic: </span>
              {game.metacritic || "N/A"}
            </div>

            <div>
              <span className="text-gray-500">Released: </span>
              {game.released || "Unknown"}
            </div>

            <div>
              <span className="text-gray-500">Playtime: </span>
              {game.playtime ? game.playtime + " hrs" : "N/A"}
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="mt-6 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
