import React from "react";

export default function TwitchStub() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Twitch Clips</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-gradient-to-tr from-purple-800 to-violet-700 rounded-lg p-3 h-40 flex flex-col justify-between">
            <div className="bg-black/30 h-24 rounded-md" />
            <div className="text-sm text-gray-100 flex justify-between">
              <span>Streamer</span>
              <span>1.2k</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
