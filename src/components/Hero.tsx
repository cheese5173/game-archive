"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    // 배경을 더 어둡게(zinc-950) 설정하여 네온 색상과 노이즈가 돋보이게 합니다.
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-zinc-950 border-b border-white/10">
      
      {/* 1. 크로마틱 매시업 (Chromatic Mash-Ups) - 스스로 움직이는 3개의 거대한 네온 그라데이션 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 마젠타(자홍색) 덩어리 */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/30 blur-[100px] mix-blend-screen"
        />
        {/* 시안(청록색) 덩어리 */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen"
        />
        {/* 바이올렛(보라색) 덩어리 */}
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[50vw] rounded-full bg-violet-600/30 blur-[130px] mix-blend-screen"
        />
      </div>

      {/* 2. 노이즈 텍스처 (Noise Texture) - 화면 전체에 자글자글한 아날로그 질감 덮어씌우기 */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 3. 텍스트 영역 */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
            <span className="text-white">Curated.</span><br />
            {/* 텍스트에도 크로마틱 컬러 적용 */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500">
              Gaming.
            </span><br />
            <span className="text-white">Archive.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-wide backdrop-blur-md bg-black/20 px-6 py-3 rounded-2xl border border-white/5">
            가장 트렌디한 게임들을 탐험하고, 당신만의 컬렉션을 완성하세요.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}