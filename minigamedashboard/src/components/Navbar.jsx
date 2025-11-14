import React from "react";

export default function Navbar() {
  return (
    <header className="bg-transparent backdrop-blur-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white">ES</div>
          <div className="text-xl font-semibold">EsportsDash</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
          <a href="#trending" className="hover:text-white">Trending</a>
          <a href="#charts" className="hover:text-white">Charts</a>
          <a href="#twitch" className="hover:text-white">Twitch</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded-md border border-gray-700 text-sm">Sign in</button>
        </div>
      </div>
    </header>
  );
}
