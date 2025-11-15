import React from "react";

export default function Navbar() {
  return (
    <header className=" sticky h-30 top-2  z-20">
      <div className="max-w-5xl rounded-xl mx-auto px-2 py-4  ">
        <div className="flex items-center align-items-center border-2 border-bg-white gap-3">
          <div className="w-40 h-10 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white">MiniHub</div>
          
        </div>

        {/* <nav className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 px-4 py-3">
          <a href="#trending" className="hover:text-white">Trending</a>
          <a href="#charts" className="hover:text-white">Charts</a>
          <a href="#twitch" className="hover:text-white">Twitch</a>
        </nav> */}

        {/* <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-purple-700 
           transition-all shadow-md hover:shadow-lg">Sign in</button>
        </div> */}
      </div>
    </header>
  );
}
