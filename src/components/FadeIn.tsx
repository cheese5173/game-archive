"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      // 처음에는 투명하고 아래로 30px 내려가 있는 상태
      initial={{ opacity: 0, y: 30 }}
      // 화면에 보이면 투명도 100%에 원래 위치로 복귀
      whileInView={{ opacity: 1, y: 0 }}
      // 한 번 나타나면 다시 숨지 않음, 화면에 20% 정도 보일 때 작동 시작
      viewport={{ once: true, amount: 0.2 }}
      // 0.8초 동안 빠르고 부드럽게 움직임 (Apple 스타일 곡선)
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}