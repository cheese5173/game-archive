"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameCard3D from "../../components/GameCard3D";
import { games } from "../../data/games";

export default function GamesPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  
  // 전체 게임 데이터에서 장르만 추출해 필터 버튼 목록 생성
  const genres = ["All", ...Array.from(new Set(games.map((g) => g.genre)))];
  
  // 선택된 장르에 맞게 게임 필터링
  const filteredGames = selectedGenre === "All" 
    ? games 
    : games.filter((g) => g.genre === selectedGenre);

  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* 페이지 헤더 영역 */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            Full Archive
          </h1>
          <p className="text-gray-400 text-lg">
            모든 컬렉션을 탐색하고 분류하세요. (빠른 검색: Cmd + K)
          </p>
        </div>

        {/* 🌟 메인에서 가져온 장르 필터 버튼 영역 */}
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
        
        {/* 모든 게임 카드 그리드 (필터링 시 부드러운 위치 이동 애니메이션 적용) */}
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