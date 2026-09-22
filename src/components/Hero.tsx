"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    // 배너 영역: 높이를 화면의 60% 정도로 시원하게 잡고, 넘치는 빛은 잘라냅니다(overflow-hidden)
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black border-b border-white/10">
      
      {/* 1. 뒷배경 오로라 불빛 (Atmospheric Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* 2. 전면 타이포그래피 영역 */}
      <div className="relative z-10 text-center px-6">
        
        {/* 메인 타이틀 애니메이션 (스르륵 떠오름) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
            <span className="text-white">Curated.</span><br />
            {/* 'Gaming' 글자에만 메탈릭한 은은한 그라데이션 적용 */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Gaming.
            </span><br />
            <span className="text-white">Archive.</span>
          </h1>
        </motion.div>

        {/* 서브 텍스트 애니메이션 (타이틀보다 살짝 늦게 떠오름) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            가장 트렌디한 게임들을 탐험하고, 당신만의 컬렉션을 완성하세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}