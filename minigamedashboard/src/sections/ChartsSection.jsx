import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { RAWG_BASE } from "../utils/rawg";

export default function ChartsSection() {
  const genresURL = `${RAWG_BASE}/genres?key=${import.meta.env.VITE_RAWG_KEY}`;
  const platformsURL = `${RAWG_BASE}/platforms/lists/parents?key=${import.meta.env.VITE_RAWG_KEY}`;

  const { data: genresData } = useFetch(genresURL);
  const { data: platformsData } = useFetch(platformsURL);

  const genres =
    genresData?.results?.map((g) => ({
      name: g.name,
      value: g.games_count,
    })) || [];

  const platforms =
    platformsData?.results?.map((p) => ({
      name: p.name,
      count: p.platforms?.length || 0,
    })) || [];

  const COLORS = [
    "#8B5CF6",
    "#EC4899",
    "#06B6D4",
    "#10B981",
    "#F59E0B",
    "#EF4444",
  ];

  // Animation
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold mb-4">Game Analytics</h2>

      {/* TWO ROWS */}
      <div className="grid grid-rows-2 gap-4">

        {/* ===================== PIE CHART CARD ===================== */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="
            p-6 rounded-xl border
            text-black border-gray-300
            dark:bg-black shadow-lg dark:text-white dark:border-gray-800
          "
        >
          <h3 className="text-lg font-semibold mb-4">Genre Popularity</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genres}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {genres.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* LEGEND */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {genres.map((g, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                ></span>
                {g.name} <span className="opacity-60">({g.value})</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===================== BAR CHART CARD ===================== */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="
            p-6 rounded-xl border
            text-black border-gray-300
            dark:bg-black shadow-lg dark:text-white dark:border-gray-800
          "
        >
          <h3 className="text-lg font-semibold mb-4">Platform Coverage</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platforms}>
              <XAxis
                dataKey="name"
                stroke="currentColor"
                tick={{ fill: "currentColor" }}
              />
              <YAxis
                stroke="currentColor"
                tick={{ fill: "currentColor" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="count" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </div>
  );
}
