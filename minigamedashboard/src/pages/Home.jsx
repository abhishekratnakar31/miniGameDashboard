
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

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* ABOUT */}
      <section id="about">
        <AboutSection />
      </section>

      {/* TRENDING */}
      <section id="trending">
        <TrendingSection />
      </section>

      {/* CHARTS */}
      <section id="charts">
        <ChartsSection />
      </section>

      {/* TWITCH */}
      <section id="twitch" className="fade-section">
        <TwitchSection />
      </section>

      <ThemeToggle />
    </div>
  );
}