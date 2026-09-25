"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameCard3D from "../../components/GameCard3D";
import { games } from "../../data/games";

export default function GamesPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  
  const genres = ["All", ...Array.from(new Set(games.map((g) => g.genre)))];
  
  const filteredGames = selectedGenre === "All" 
    ? games 
    : games.filter((g) => g.genre === selectedGenre);

  return (
    // 🌟 배경은 완전한 칠흑(bg-black)으로 원상복구
    <main className="min-h-screen bg-black pt-32 pb-24 px-6 relative">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 페이지 헤더 영역 */}
        <div className="mb-14">
          {/* 🌟 타이틀: 원하시던 크로마틱 그라데이션만 깔끔하게 남겼습니다 */}
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500">
            Full Archive
          </h1>
          {/* 설명 텍스트도 배경 없이 깔끔하게 정리 */}
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
            모든 컬렉션을 탐색하고 분류하세요. <span className="text-zinc-600">(빠른 검색: Ctrl + K)</span>
          </p>
        </div>

        {/* 장르 필터 버튼 영역 */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-8 mb-12">
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
        
        {/* 모든 게임 카드 그리드 */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <GameCard3D
                  id={game.id}
                  title={game.title}
                  genre={game.genre}
                  year={game.year}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </main>
  );
}