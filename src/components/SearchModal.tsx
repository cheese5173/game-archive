"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { games } from "../data/games";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  // 🌟 Ctrl+K / Cmd+K 및 ESC 키보드 입력 감지
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 검색어에 맞게 게임 필터링 (제목 또는 장르)
  const filteredGames = search === "" 
    ? [] 
    : games.filter(game => 
        game.title.toLowerCase().includes(search.toLowerCase()) || 
        game.genre.toLowerCase().includes(search.toLowerCase())
      );

  // 게임 선택 시 페이지 이동 및 모달 닫기
  const handleSelect = (id: string) => {
    setIsOpen(false);
    setSearch("");
    router.push(`/games/${id}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🌟 1. 뒷배경 시네마틱 블러 처리 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          
          {/* 🌟 2. 묵직하게 떠오르는 검색 모달 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4 pointer-events-none"
          >
            <div className="bg-zinc-900/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md pointer-events-auto">
              
              {/* 입력창 영역 */}
              <div className="flex items-center px-6 py-4 border-b border-white/10">
                <svg className="w-6 h-6 text-gray-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  autoFocus
                  placeholder="게임 제목이나 장르를 검색하세요..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-white text-lg focus:outline-none placeholder-gray-600"
                />
                <span className="text-xs text-gray-500 border border-gray-600 rounded px-2 py-1 ml-4 font-mono tracking-widest">ESC</span>
              </div>

              {/* 검색 결과 리스트 */}
              {search !== "" && (
                <div className="max-h-[50vh] overflow-y-auto py-2">
                  {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                      <div
                        key={game.id}
                        onClick={() => handleSelect(game.id)}
                        className="px-6 py-4 hover:bg-white/10 cursor-pointer transition-colors flex justify-between items-center group"
                      >
                        <div>
                          <h4 className="text-white font-bold text-lg group-hover:text-red-500 transition-colors">
                            {game.title}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">{game.genre} • {game.year}</p>
                        </div>
                        <span className="text-gray-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300">
                          →
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="px-6 py-12 text-center text-gray-500">
                      일치하는 기록이 없습니다.
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}