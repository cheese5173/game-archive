"use client";

import { useState } from "react";
import { Boss } from "../data/games";

export default function BossGallery({ bosses }: { bosses: Boss[] }) {
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);

  return (
    <>
      {/* 1. 완벽하게 장식을 덜어낸 미니멀 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {bosses.map((boss) => (
          <div 
            key={boss.id} 
            onClick={() => setSelectedBoss(boss)}
            className="group cursor-pointer flex flex-col"
          >
            {/* 썸네일: 테두리 없이 둥근 모서리와 호버 시 부드러운 확장 효과만 적용 */}
            <div className="aspect-[4/3] bg-zinc-900 rounded-3xl overflow-hidden relative mb-5">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium group-hover:scale-105 transition-transform duration-700 ease-out">
                {boss.image}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            {/* 텍스트: 카드 안의 박스가 아니라 이미지 아래에 시원하게 배치 */}
            <h3 className="text-2xl font-bold text-white tracking-tight">{boss.name}</h3>
            <p className="text-gray-500 mt-2 line-clamp-1">{boss.description}</p>
          </div>
        ))}
      </div>

      {/* 2. 트렌디한 타이포그래피 중심의 모달 창 */}
      {selectedBoss && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-2xl"
          onClick={() => setSelectedBoss(null)}
        >
          <div 
            className="bg-black w-full max-w-6xl h-auto md:h-[700px] rounded-[2rem] flex flex-col md:flex-row relative overflow-hidden animate-in fade-in zoom-in-95 duration-500 border border-white/5"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedBoss(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all backdrop-blur-md"
            >
              ✕
            </button>

            {/* 왼쪽: 여백 없이 모서리까지 꽉 차는 거대한 캔버스 */}
            <div className="w-full md:w-1/2 h-[400px] md:h-full bg-zinc-900 relative flex items-center justify-center">
              <span className="z-10 text-4xl font-black text-white/20 tracking-widest">
                {selectedBoss.image}
              </span>
            </div>

            {/* 오른쪽: 선 하나 없이 글자와 여백만으로 구성된 상세 설명 */}
            <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-black">
              <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                {selectedBoss.name}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-xl font-light">
                {selectedBoss.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}