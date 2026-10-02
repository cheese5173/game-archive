"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 페이지에 진입할 때: 투명도 0, 살짝 아래로 내려가 있음, 심한 블러(흐림) 처리
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      
      // 애니메이션 진행: 투명도 100%, 원래 위치로, 블러 해제
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      
      // 속도 및 트랜지션 느낌 (0.7초 동안 묵직하고 부드럽게)
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}