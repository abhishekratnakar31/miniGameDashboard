


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import AboutSection from "../sections/AboutSection";
import TrendingSection from "../sections/TrendingSection";
import ChartsSection from "../sections/ChartsSection";
import SearchResults from "../components/SearchResults";
import ThemeToggle from "../components/ThemeToggle";
import TwitchSection from "../sections/TwitchSection";

import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import { searchGamesURL } from "../utils/rawg";
import { Skiper48 } from "../components/Skiper48";



// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);

  const { data: searchData } = useFetch(
    debounced ? searchGamesURL(debounced) : null
  );

  const results = searchData?.results || [];
  const heroRef = useRef(null);

  // HERO animations
  useEffect(() => {
    const el = heroRef.current;

    gsap.fromTo(
      el.querySelectorAll(".hero-text"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 }
    );

    gsap.fromTo(
      el.querySelector(".hero-search"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.4, duration: 0.8 }
    );
  }, []);

  // SECTION fade animations
  useEffect(() => {
    gsap.fromTo(
      ".fade-section",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".fade-section",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-40 space-y-20">

      {/* HERO */}
      <section ref={heroRef} className="pt-6 h-screen flex items-center bg-black">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* TEXT */}
          <div>
            <h1 className="hero-text text-4xl md:text-5xl font-extrabold leading-tight">
              Esports & Gaming Stats Dashboard
            </h1>

            <p className="hero-text mt-4 text-gray-700 dark:text-gray-300 max-w-xl">
              Real-time trends, ratings, and live streams — fast, responsive and built for demos.
            </p>

            {/* SEARCH */}
            <div className="mt-6 hero-search relative">
              <motion.input
                whileFocus={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games..."
                className="
                  w-full md:w-3/4 
                  bg-white dark:bg-gray-800
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  px-4 py-3 rounded-lg
                "
              />

              {query.length > 0 && (
                <SearchResults
                  results={results}
                  onSelect={() => setQuery("")}
                />
              )}
            </div>
          </div>

          {/* IMAGE BOX */}
          {/* <div className="hidden md:flex justify-center">
            <div
              className="
                w-full max-w-md h-56 rounded-xl flex items-center justify-center
                bg-gradient-to-tr
                from-gray-200 to-gray-100
                dark:from-gray-800 dark:to-gray-700
                text-gray-700 dark:text-gray-300 
              "
            >
              Placeholder for hero animation
            </div>
          </div> */}
          <div className="hidden md:flex justify-center items-center">
  <Skiper48 />
</div>

        </div>
      </section>

      {/* ABOUT */}
      {/* <section className="fade-section ">
        <AboutSection />
      </section> */}

      {/* TRENDING */}
      <section id="trending" className="fade-section h-screen">
        <TrendingSection />
      </section>

      {/* CHARTS */}
      <section id="charts" className="fade-section">
        <ChartsSection />
      </section>

      {/* TWITCH */}
      <section id="twitch" className="fade-section">
        <TwitchSection />
      </section>

      {/* DARK MODE TOGGLE */}
      <ThemeToggle />
    </div>
  );
}
