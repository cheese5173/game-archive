"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
  id: string;
  title: string;
  genre: string;
  year: number;
  themeColor?: string;
  imageUrl?: string;
  imagePosition?: string; // 🌟 추가됨
  cardTitleSize?: string;
}

// 🌟 매개변수(props)에 imagePosition 추가
export default function GameCard3D({ id, title, genre, year, themeColor, imageUrl, imagePosition, cardTitleSize }: GameCardProps) {
  
  // 🌟 Tailwind가 동적 클래스를 지우는 것을 막기 위한 방어 코드 추가
  const tailwindSafelist = "object-cover object-contain object-top object-bottom object-center object-left object-right";

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const glowColor = themeColor || "#ffffff";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = (x / rect.width) - 0.5;
    const centerY = (y / rect.height) - 0.5;
    setRotateX(-centerY * 20);
    setRotateY(centerX * 20);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Link href={`/games/${id}`} className="block w-full perspective-[1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY, scale: isHovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 40, mass: 0.5 }}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative w-full h-[450px] bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end p-8 shadow-2xl group"
      >
        {/* 네온 글로우 테두리 */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none z-20"
          style={{ boxShadow: `0 0 30px -5px ${glowColor}, inset 0 0 20px -10px ${glowColor}`, border: `2px solid ${glowColor}` }}
        />

        {/* 실제 이미지 레이어 */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl border border-white/10">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // 🌟 DB에서 받아온 imagePosition을 적용하고, 값이 없으면 기본값 사용
              className={imagePosition || "object-cover object-center"} 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black" />
          )}
          
          {/* 텍스트가 잘 보이도록 이미지 위에 까만 그림자 덮기 (Vignette 효과) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* 빛 반사 효과 (Glare) */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 rounded-3xl"
          style={{ opacity: isHovered ? 1 : 0, background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)` }}
        />

        {/* 3D 텍스트 영역 */}
        <div className="relative z-30 transform-gpu" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-center gap-3 text-xs font-bold text-gray-400 tracking-widest mb-3 uppercase">
            <span className="transition-colors duration-300" style={{ color: isHovered ? glowColor : undefined }}>{genre}</span>
            <span className="text-white/20">•</span>
            <span className="group-hover:text-white transition-colors duration-300">{year}</span>
          </div>
          <h3 className={`hover-glitch ${cardTitleSize || "text-4xl"} font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] break-keep`}>
          {title}
      </h3>
        </div>
      </motion.div>
    </Link>
  );
}