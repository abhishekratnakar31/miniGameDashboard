// import React from "react";
// import TrendingStub from "../sections/TrendingStub";
// import ChartsStub from "../sections/ChartsStub";
// import TwitchStub from "../sections/TwitchStub";

// export default function Home() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">
//       {/* HERO */}
//       <section className="pt-6">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//               Esports & Gaming Stats Dashboard
//             </h1>
//             <p className="mt-4 text-gray-300 max-w-xl">
//               Real-time trends, ratings, and live streams — fast, responsive and made for judges who like shiny things.
//             </p>

//             <div className="mt-6">
//               <input
//                 type="text"
//                 placeholder="Search games (we'll wire this up next)..."
//                 className="w-full md:w-3/4 bg-gray-800 border border-gray-700 rounded-md px-4 py-3"
//               />
//             </div>
//           </div>

//           <div className="hidden md:flex justify-center">
//             <div className="w-full max-w-md h-56 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl flex items-center justify-center text-center text-gray-300">
//               Placeholder for hero image / animation
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About / quick cards */}
//       <section>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="p-6 bg-gray-800 rounded-lg">Fast API integration</div>
//           <div className="p-6 bg-gray-800 rounded-lg">Charts & analytics</div>
//           <div className="p-6 bg-gray-800 rounded-lg">Twitch live clips</div>
//         </div>
//       </section>

//       {/* Placeholders for main sections */}
//       <section id="trending">
//         <TrendingStub />
//       </section>

//       <section id="charts">
//         <ChartsStub />
//       </section>

//       <section id="twitch">
//         <TwitchStub />
//       </section>
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { motion } from "framer-motion";

// export default function Home() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const el = heroRef.current;

//     gsap.fromTo(
//       el.querySelectorAll(".hero-text"),
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       el.querySelector(".hero-search"),
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, delay: 0.5, duration: 0.8, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

//       {/* HERO */}
//       <section ref={heroRef} className="mt-6">
//         <h1 className="hero-text text-4xl md:text-5xl font-extrabold leading-tight">
//           Esports & Gaming Stats Dashboard
//         </h1>

//         <p className="hero-text mt-4 text-gray-300 max-w-xl">
//           Real-time insights, trending titles, analytics and live clips.
//         </p>

//         {/* Search */}
//         <div className="mt-6 hero-search">
//           <motion.input
//             whileFocus={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             type="text"
//             className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg w-full md:w-1/2 focus:outline-none"
//             placeholder="Search games..."
//           />
//         </div>
//       </section>

//       {/* Placeholder Sections */}
//       <section id="trending" className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
//         Trending Section Placeholder
//       </section>

//       <section id="charts" className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
//         Charts Placeholder
//       </section>

//       <section id="twitch" className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
//         Twitch Placeholder
//       </section>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import TrendingStub from "../sections/TrendingStub";
import ChartsStub from "../sections/ChartsStub";
import TwitchStub from "../sections/TwitchStub";
import AboutSection from "../sections/AboutSection";
import TrendingSection from "../sections/TrendingSection";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import { searchGamesURL } from "../utils/rawg";
import SearchResults from "../components/SearchResults";
import ChartsSection from "../sections/ChartsSection";

import TwitchSection from "../sections/TwitchSection";


export default function Home() {
      const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);

  const { data: searchData } = useFetch(
    debounced ? searchGamesURL(debounced) : null
  );

  const results = searchData?.results || [];

  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    // GSAP hero text animation
    gsap.fromTo(
      el.querySelectorAll(".hero-text"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    );

    // GSAP search animation
    gsap.fromTo(
      el.querySelector(".hero-search"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.4, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">

      {/* HERO SECTION */}
      <section ref={heroRef} className="pt-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT: text */}
          <div>
            <h1 className="hero-text text-4xl md:text-5xl font-extrabold leading-tight">
              Esports & Gaming Stats Dashboard
            </h1>

            <p className="hero-text mt-4 text-gray-300 max-w-xl">
              Real-time trends, ratings, and live streams — fast, responsive and made for judges who like shiny things.
            </p>

            {/* Search */}
            {/* <div className="mt-6 hero-search">
              <motion.input
                whileFocus={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                type="text"
                placeholder="Search games..."
                className="w-full md:w-3/4 bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none"
              />
            </div> */}
            <div className="mt-6 hero-search relative">
  <motion.input
    whileFocus={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search games..."
    className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg w-full md:w-3/4 focus:outline-none"
  />

  {/* Live Search Dropdown */}
  {query.length > 0 && (
    <SearchResults
      results={results}
      onSelect={(game) => {
        console.log("Selected game:", game);
        setQuery("");
      }}
    />
  )}
</div>

          </div>

          {/* RIGHT: image placeholder */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-md h-56 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl flex items-center justify-center text-center text-gray-300">
              Placeholder for hero image / animation
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CARDS */}
      <section>
  <AboutSection />
</section>


      {/* MAIN CONTENT SECTIONS */}
      <section id="trending">
   <TrendingSection />

      </section>

      <section id="charts">
        <ChartsSection />

      </section>

      <section id="twitch">
        <TwitchSection />
      </section>
    </div>
  );
}
