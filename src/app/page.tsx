"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import GameCard from "../components/GameCard";
import { games } from "../data/games";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const genres = ["All", ...Array.from(new Set(games.map((g) => g.genre)))];

  const filteredGames = selectedGenre === "All" 
    ? games 
    : games.filter((g) => g.genre === selectedGenre);

  return (
    <main className="min-h-screen bg-black pb-24">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-10 gap-6">
          <h2 className="text-4xl font-black text-white tracking-tighter">
            Archive
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedGenre === genre
                    ? "bg-white text-black shadow-lg shadow-white/20"
                    : "bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                layout 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              >
                <GameCard
                  id={game.id}
                  title={game.title}
                  genre={game.genre}
                  year={game.year}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}