import Link from "next/link";

interface GameCardProps {
  id: string; // 👈 데이터와 연결할 고유 id 추가
  title: string;
  genre: string;
  year: string;
}

export default function GameCard({ id, title, genre, year }: GameCardProps) {
  return (
    // 카드를 클릭하면 /games/elden-ring 같은 주소로 이동합니다
    <Link href={`/games/${id}`}>
      <div className="group cursor-pointer rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors">
        <div className="aspect-[16/9] bg-gray-800 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium group-hover:scale-110 transition-transform duration-500">
            IMAGE
          </div>
        </div>
        
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
    </Link>
  );
}