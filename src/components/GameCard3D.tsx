"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GameCardProps {
  id: string;
  title: string;
  genre: string;
  year: number;
}

export default function GameCard({ id, title, genre, year }: GameCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

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
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-[450px] bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end p-8 border border-white/10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black z-0" />

        <div 
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
          }}
        />

        <div 
          className="relative z-20 transform-gpu"
          style={{ transform: "translateZ(50px)" }} 
        >
          <div className="flex items-center gap-3 text-xs font-bold text-gray-400 tracking-widest mb-3 uppercase">
            <span>{genre}</span>
            <span className="text-white/20">•</span>
            <span>{year}</span>
          </div>
          
          {/* 🌟 여기에 hover-glitch 클래스가 추가되었습니다! */}
          <h3 className="hover-glitch text-4xl font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {title}
          </h3>
          
        </div>
      </motion.div>
    </Link>
  );
}