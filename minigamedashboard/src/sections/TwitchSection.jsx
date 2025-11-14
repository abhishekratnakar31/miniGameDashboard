// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { twitchClipsURL, twitchHeaders } from "../utils/twitch";

// // export default function TwitchSection() {
// //   const [clips, setClips] = useState([]);

// //   useEffect(() => {
// //     async function loadClips() {
// //       try {
// //         const res = await axios.get(twitchClipsURL, {
// //           headers: twitchHeaders,
// //         });
// //         console.log("CLIPS RESPONSE:", res.data)
// //         setClips(res.data.clips?.slice(0, 8) || []);
// //       } catch (err) {
// //         console.error("Error fetching Twitch clips:", err);
// //       }
// //     }
// //     loadClips();
// //   }, []);

// //   const container = {
// //     hidden: {},
// //     show: { transition: { staggerChildren: 0.15 } },
// //   };

// //   const card = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
// //   };

// //   return (
// //     <motion.div
// //       initial="hidden"
// //       whileInView="show"
// //       viewport={{ once: true }}
// //       variants={container}
// //       className="space-y-6"
// //     >
// //       <h2 className="text-2xl font-semibold">Trending Twitch Clips</h2>

// //       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {clips.map((clip, index) => (
// //           <motion.a
// //             key={index}
// //             href={clip.url}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             variants={card}
// //             whileHover={{ scale: 1.05 }}
// //             className="bg-gradient-to-tr from-purple-800 to-purple-600 p-3 rounded-xl border border-purple-500/30 cursor-pointer"
// //           >
// //             <img
// //               src={clip.thumbnail}
// //               alt={clip.title}
// //               className="w-full h-36 object-cover rounded-lg"
// //             />

// //             <div className="mt-3">
// //               <h3 className="text-sm font-semibold">{clip.title}</h3>
// //               <p className="text-xs text-gray-200 mt-1">
// //                 👤 {clip.broadcaster_name}
// //               </p>
// //               <p className="text-xs text-gray-300">
// //                 👀 {clip.view_count} views
// //               </p>
// //             </div>
// //           </motion.a>
// //         ))}
// //       </div>
// //     </motion.div>
// //   );
// // }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { twitchClipsURL, twitchHeaders } from "../utils/twitch";

// export default function TwitchSection() {
//   const [clips, setClips] = useState([]);

//   useEffect(() => {
//     async function loadClips() {
//       try {
//         const res = await axios.get(twitchClipsURL, {
//           headers: twitchHeaders,
//           params: { limit: 12 },
//         });

//         console.log("CLIPS RESPONSE:", res.data);

//         setClips(res.data?.clips || []);
//       } catch (err) {
//         console.error("Error fetching Twitch clips:", err);
//       }
//     }
//     loadClips();
//   }, []);

//   const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.15 } },
//   };

//   const card = {
//     hidden: { opacity: 0, scale: 0.8 },
//     show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       variants={container}
//       className="space-y-6"
//     >
//       <h2 className="text-2xl font-semibold">Trending Twitch Clips</h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {clips.map((clip, i) => (
//           <motion.a
//             key={i}
//             href={clip.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={card}
//             whileHover={{ scale: 1.05 }}
//             className="bg-gradient-to-tr from-purple-800 to-purple-600 p-3 rounded-xl border border-purple-500/30 cursor-pointer"
//           >
//             <img
//               src={clip.thumbnail_url}
//               className="w-full h-36 object-cover rounded-lg"
//             />

//             <div className="mt-3">
//               <h3 className="text-sm font-semibold">{clip.title}</h3>
//               <p className="text-xs text-gray-200">👤 {clip.broadcaster_name}</p>
//               <p className="text-xs text-gray-300">👀 {clip.views} views</p>
//             </div>
//           </motion.a>
//         ))}
//       </div>

//       {clips.length === 0 && (
//         <p className="text-gray-400 text-sm">No clips found. Check API key or limit.</p>
//       )}
//     </motion.div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twitchClipsURL, twitchHeaders } from "../utils/twitch";

export default function TwitchSection() {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    async function loadClips() {
      try {
        const res = await axios.get(twitchClipsURL, {
          headers: twitchHeaders,
          params: { limit: 12 }
        });

        console.log("CLIPS:", res.data);

        setClips(res.data?.clips || []);
      } catch (err) {
        console.error("Twitch API error:", err);
      }
    }

    loadClips();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Live Twitch Clips</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clips?.map((clip, i) => (
          <a
            key={i}
            href={clip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800/40 border border-purple-500/30 rounded-xl p-3 hover:scale-105 transition"
          >
            <img
              src={clip.thumbnail}
              className="w-full h-36 object-cover rounded-lg"
            />

            <div className="mt-3">
              <h3 className="text-sm font-semibold">{clip.title}</h3>
              <p className="text-xs">👤 {clip.broadcaster}</p>
              <p className="text-xs text-gray-300">👀 {clip.views} views</p>
            </div>
          </a>
        ))}
      </div>

      {clips.length === 0 && (
        <p className="text-red-400 text-sm">No clips found. API may be rate-limited.</p>
      )}
    </div>
  );
}