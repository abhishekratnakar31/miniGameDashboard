import React from "react";

export default function TrendingStub() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Trending games</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-4 h-40 flex flex-col justify-between">
            <div className="bg-gray-700 h-24 rounded-md" />
            <div className="flex items-center justify-between text-sm text-gray-300 mt-3">
              <div>Game {i+1}</div>
              <div className="px-2 py-1 bg-gray-700 rounded">★ 4.5</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
