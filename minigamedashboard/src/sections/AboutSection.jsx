import { motion } from "framer-motion";
import { RocketLaunchIcon, ChartBarIcon, PlayIcon } from "@heroicons/react/24/outline";

export default function AboutSection() {
  const cards = [
    {
      icon: <RocketLaunchIcon className="w-10 h-10 text-purple-400" />,
      title: "Fast API Integration",
      desc: "RAWG + Twitch data fetched in milliseconds.",
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-cyan-400" />,
      title: "Charts & Analytics",
      desc: "Genres, platforms & ratings visualized cleanly.",
    },
    {
      icon: <PlayIcon className="w-10 h-10 text-pink-400" />,
      title: "Twitch Live Clips",
      desc: "Trending clips from top esports streams.",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-6"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-white/20 transition"
        >
          <div className="mb-4">{card.icon}</div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-gray-400 mt-2 text-sm">{card.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
