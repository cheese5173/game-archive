interface GameCardProps {
  title: string;
  genre: string;
  year: string;
}

export default function GameCard({ title, genre, year }: GameCardProps) {
  return (
    <div className="group cursor-pointer rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors">
      {/* 임시 이미지 영역 (group-hover로 마우스를 올리면 살짝 확대됨) */}
      <div className="aspect-[16/9] bg-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium group-hover:scale-110 transition-transform duration-500">
          IMAGE PLACEHOLDER
        </div>
      </div>
      
      {/* 게임 정보 영역 */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{genre}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}