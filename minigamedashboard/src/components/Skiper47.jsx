"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Skiper47({ images, onGameClick, onFavoriteToggle, favorites }) {
  return (
    <div className="relative flex items-center justify-center">
  {/* RED GLOW */}
  <div className="absolute inset-0 blur-[120px] bg-red-600/40 rounded-full"></div>

  <Carousel_001
    images={images}
    showPagination
    loop
    onGameClick={onGameClick}
    onFavoriteToggle={onFavoriteToggle}
    favorites={favorites}
  />
</div>

  );
}

function Carousel_001({
  images,
  showPagination,
  loop,
  onGameClick,
  onFavoriteToggle,
  favorites,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-4xl")}
    >
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={loop}
        slidesPerView={2.3}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={showPagination ? { clickable: true } : false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="Carousal_001"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="!h-[420px] !w-[520px] relative">
            
            {/* FAVORITE BUTTON */}
            <button
              className="absolute top-3 right-3 text-2xl z-20"
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle(item.game);
              }}
            >
              {favorites.some((fav) => fav.id === item.game.id) ? "❤️" : "🤍"}
            </button>

            {/* CLICKABLE IMAGE */}
            <img
              className="h-full w-full object-cover rounded-xl cursor-pointer"
              src={item.src}
              alt={item.alt}
              onClick={() => onGameClick(item.game)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
