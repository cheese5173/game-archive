"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Hero from "../components/Hero";
import GameCard3D from "../components/GameCard3D";
import { games } from "../data/games";

export default function Home() {
  // 🌟 랜덤으로 뽑힌 6개의 게임을 담을 상태 (초기엔 빈 배열)
  const [randomGames, setRandomGames] = useState<typeof games>([]);

  // 🌟 컴포넌트가 화면에 나타날 때(Mount), 데이터를 섞어서 6개만 뽑아냅니다.
  useEffect(() => {
    const shuffled = [...games].sort(() => 0.5 - Math.random());
    setRandomGames(shuffled.slice(0, 6));
  }, []);

  const textContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: 80, rotateX: 45 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const playHoverSound = () => {
    const audio = new Audio("/sounds/hover.mp3");
    audio.volume = 0.3;
    audio.play().catch(() => {}); 
  };

  return (
    <main className="min-h-screen bg-black pb-24 relative overflow-hidden">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-6 mt-16">
        
     {/* 🌟 3번 트렌드: 신화적 도서관 컨셉 (Choose Your Game) */}
        <div className="relative mb-20 py-12 flex flex-col items-center justify-center overflow-hidden cursor-default">
          
          {/* 1. 배경 마키(Marquee) 텍스트 - 신화적인 아카이브 느낌으로 문구 변경 */}
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[12vw] md:text-[8rem] font-black opacity-10 text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] select-none pointer-events-none tracking-widest"
          >
            THE GREAT ARCHIVE OF REALMS — SELECT YOUR DESTINY — ANCIENT RECORDS — THE GREAT ARCHIVE OF REALMS — 
          </motion.div>

          {/* 2. 유저의 마우스에 반응하는 메인 외곽선 타이포그래피 */}
          <motion.div 
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex w-full justify-center" 
          >
            {/* 🌟 16글자가 화면에 맞도록 크기 축소 및 띄어쓰기 완벽 대응 */}
            {"CHOOSE YOUR GAME".split("").map((letter, index) => (
              <motion.span 
                key={index} 
                variants={textItem} 
                // 빈 공간(띄어쓰기)일 때는 소리가 나지 않도록 예외 처리
                onMouseEnter={letter === " " ? undefined : playHoverSound} 
                className={`font-black uppercase tracking-tighter leading-none inline-block origin-bottom transition-all duration-300 text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white] drop-shadow-2xl 
                  ${letter === " " 
                    ? "w-[2.5vw] md:w-[1.5rem]" // 띄어쓰기일 경우 너비만 차지하게 고정
                    : "hover:text-white hover:scale-110 hover:-translate-y-6" // 글자일 경우에만 애니메이션 작동
                  } 
                  text-[6vw] md:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.5rem]`}
              >
                {/* HTML에서 빈 공간이 무시되지 않도록 \u00A0(공백 문자)로 변환 */}
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        {/* 랜덤 6개 카드 그리드 */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {randomGames.map((game) => (
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
      </section>
    </main>
  );
}