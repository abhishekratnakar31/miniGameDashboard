// import useFetch from "../hooks/useFetch";
// import { trendingGamesURL } from "../utils/rawg";

// export default function TrendingSection() {
//   const { data, loading, error } = useFetch(trendingGamesURL);

//   if (loading) return <div className="text-gray-300">Loading trending games...</div>;
//   if (error) return <div className="text-red-500">Error fetching games.</div>;

//   const games = data?.results || [];

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-semibold">Trending Games</h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {games.map((game) => (
//           <div
//             key={game.id}
//             className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-white/20 transition"
//           >
//             <img
//               src={game.background_image}
//               alt={game.name}
//               className="w-full h-36 object-cover rounded-lg"
//             />

//             <div className="mt-3">
//               <h3 className="text-lg font-medium">{game.name}</h3>

//               <div className="text-sm text-gray-400 mt-1">
//                 Rating: {game.rating}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { motion } from "framer-motion";
// import useFetch from "../hooks/useFetch";
// import { trendingGamesURL } from "../utils/rawg";
// import { useState } from "react";
// import GameModal from "../components/GameModal";


// export default function TrendingSection() {
//     const [selected, setSelected] = useState(null);


//   const { data, loading, error } = useFetch(trendingGamesURL);

//   if (loading) return <div className="text-gray-300">Loading trending games...</div>;
//   if (error) return <div className="text-red-500">Error fetching games.</div>;

//   const games = data?.results || [];

//   // Grid animation
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const card = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   return (
//    <motion.div
//   key={game.id}
//   variants={card}
//   whileHover={{ scale: 1.05 }}
//   onClick={() => setSelected(game)}
//   className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-white/20 transition cursor-pointer"
// >

//       <h2 className="text-2xl font-semibold">Trending Games</h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {games.map((game) => (
//           <motion.div
//             key={game.id}
//             variants={card}
//             // whileHover={{ scale: 1.05 }}
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}

//             className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-white/20 transition cursor-pointer"
//           >
//             <img
//               src={game.background_image}
//               alt={game.name}
//               className="w-full h-40 object-cover"
//             />

//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{game.name}</h3>

//               <div className="mt-2 flex items-center justify-between">
//                 <span className="text-gray-400 text-sm">Rating: {game.rating}</span>

//                 <span className="text-xs bg-purple-700/40 text-purple-300 px-2 py-1 rounded-md border border-purple-600/30">
//                   {game.metacritic ? `MC: ${game.metacritic}` : "No MC"}
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
      
//     </motion.div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { trendingGamesURL } from "../utils/rawg";
import GameModal from "../components/GameModal";

export default function TrendingSection() {
  const { data, loading, error } = useFetch(trendingGamesURL);

  const [selected, setSelected] = useState(null);

  if (loading) return <div className="text-gray-300">Loading trending games...</div>;
  if (error) return <div className="text-red-500">Error fetching games.</div>;

  const games = data?.results || [];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold">Trending Games</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <motion.div
            key={game.id}
            variants={card}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(game)}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-white/20 transition cursor-pointer"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{game.name}</h3>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-gray-400 text-sm">Rating: {game.rating}</span>

                <span className="text-xs bg-purple-700/40 text-purple-300 px-2 py-1 rounded-md border border-purple-600/30">
                  {game.metacritic ? `MC: ${game.metacritic}` : "No MC"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <GameModal game={selected} onClose={() => setSelected(null)} />
      )}
    </motion.div>
  );
}
