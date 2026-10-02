import Link from "next/link";

interface GameCardProps {
  id: string;
  title: string;
  genre: string;
  year: number;
}

export default function GameCard({ id, title, genre, year }: GameCardProps) {
  return (
    // group: 카드 전체를 하나의 그룹으로 묶어, 마우스를 올렸을 때 내부 요소(이미지, 글자)를 동시에 조종합니다.
    <Link href={`/games/${id}`} className="block group cursor-pointer">
      
      <div className="relative overflow-hidden bg-zinc-950/50 border border-white/5 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:bg-zinc-900/80">
        
        {/* 상단: 이미지 영역 (현재는 이미지가 없으므로 세련된 더미 박스로 대체) */}
        <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
          {/* 하단으로 갈수록 어두워지는 그라데이션 (텍스트 가독성을 위해) */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10 opacity-80" />
          
          {/* 마우스를 올리면(group-hover) 이미지가 1.05배 스르륵 커집니다 */}
          <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600 font-bold transition-transform duration-700 ease-out group-hover:scale-105">
            {title} IMAGE
          </div>
        </div>

        {/* 하단: 텍스트 정보 영역 */}
        <div className="p-6 relative z-20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              {genre}
            </span>
            <span className="text-xs font-medium text-gray-500">
              {year}
            </span>
          </div>
          
          {/* 마우스를 올리면(group-hover) 제목 색상이 살짝 밝아집니다 */}
          <h3 className="text-2xl font-black text-white transition-colors duration-300 group-hover:text-indigo-300">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
}