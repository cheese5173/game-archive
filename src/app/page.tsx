import Hero from "../components/Hero";
import GameCard from "../components/GameCard";
import { games } from "../data/games"; // 👈 우리가 만든 데이터 서랍장 가져오기

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          Trending Games
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 서랍장(games)에 있는 데이터를 하나씩 꺼내서 카드로 자동 생성합니다 */}
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              genre={game.genre}
              year={game.year}
            />
          ))}
        </div>
      </section>
    </main>
  );
}