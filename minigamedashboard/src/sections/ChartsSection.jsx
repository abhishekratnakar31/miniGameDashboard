import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import useFetch from "../hooks/useFetch";
import { RAWG_BASE } from "../utils/rawg";

export default function ChartsSection() {

  const genresURL = `${RAWG_BASE}/genres?key=${import.meta.env.VITE_RAWG_KEY}`;
  const platformsURL = `${RAWG_BASE}/platforms/lists/parents?key=${import.meta.env.VITE_RAWG_KEY}`;

  const { data: genresData } = useFetch(genresURL);
  const { data: platformsData } = useFetch(platformsURL);

  const genres = genresData?.results?.map(g => ({
    name: g.name,
    value: g.games_count,
  })) || [];

  const platforms = platformsData?.results?.map(p => ({
    name: p.name,
    count: p.platforms?.length || 0,
  })) || [];

  const COLORS = ["#8B5CF6", "#EC4899", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-semibold">Game Analytics</h2>

      {/* Genre Pie Chart */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Genre Popularity</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={genres}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {genres.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Platform Bar Chart */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Platform Coverage</h3>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={platforms}>
            <XAxis dataKey="name" stroke="#ccc" tick={{ fill: "#ccc" }} />
            <YAxis stroke="#ccc" tick={{ fill: "#ccc" }} />
            <Tooltip />
            <Bar dataKey="count" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
