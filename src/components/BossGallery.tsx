"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Boss {
  name: string;
  description: string;
}

export default function BossGallery({ bosses }: { bosses: Boss[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Framer Motion을 사용하여 화면에 containerRef가 보이는 동안의 스크롤 진행도를 0~1 사이로 추적합니다.
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // 2. 스크롤 진행도에 따라 카드가 이동할 X축(가로) 거리를 계산합니다. (React 리렌더링 없이 GPU에서 즉각 처리)
  const x = useTransform(scrollYProgress, (val) => `calc(-${val * 100}% + ${val * 100}vw)`);
  
  // 3. 하단 프로그레스 바의 너비도 스크롤에 맞춰 0% ~ 100%로 변환합니다.
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!bosses || bosses.length === 0) return null;

  return (
    <div 
      ref={containerRef} 
      className="h-[300vh] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-zinc-950">
        
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.04] to-transparent pointer-events-none" />

        {/* 좌측 스크롤 유도 텍스트 */}
        <div className="absolute top-1/4 left-6 md:left-24 z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white/40">
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-bold">Keep Scrolling</span>
          </div>
        </div>

        {/* 🚀 애니메이션 트랙 (motion.div 로 변경됨) */}
        <motion.div 
          className="flex gap-8 px-6 md:px-24 w-max"
          style={{ x }} // Framer Motion이 계산한 x값을 바로 주입 (매끄러운 이동)
        >
          {bosses.map((boss, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[450px] aspect-[3/4] bg-zinc-900 border border-white/5 rounded-3xl p-8 sm:p-12 flex flex-col justify-end relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-4 right-8 text-[120px] font-black text-white/[0.03] select-none transition-transform group-hover:scale-110 group-hover:-translate-x-2 duration-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 transform transition-transform duration-500">
                <div className="w-12 h-1 bg-white/20 mb-6 rounded-full group-hover:w-24 group-hover:bg-white/60 transition-all duration-500" />
                <h3 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">
                  {boss.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {boss.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 🚀 하단 스크롤 진행률 바 (motion.div 로 변경됨) */}
        <div className="absolute bottom-10 left-0 w-full px-6 md:px-24">
          <div className="h-px w-full bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}