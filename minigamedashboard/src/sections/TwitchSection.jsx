import { motion } from "framer-motion";
import { mockTwitchClips } from "../data/mockTwitchClips";

export default function TwitchSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const clips = mockTwitchClips;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Trending Twitch Clips</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clips.map((clip, i) => (
          <motion.a
            key={i}
            href={clip.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-tr from-purple-800 to-purple-600 p-3 rounded-xl border border-purple-600/30 cursor-pointer"
          >
            <img
              src={clip.thumbnail}
              alt={clip.title}
              className="w-full h-36 object-cover rounded-lg"
            />

            <div className="mt-3 space-y-1">
              <h3 className="text-sm font-semibold">{clip.title}</h3>
              <p className="text-xs text-gray-200">👤 {clip.broadcaster}</p>
              <p className="text-xs text-gray-300">👀 {clip.views.toLocaleString()} views</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
