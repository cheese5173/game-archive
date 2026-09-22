import Hero from "../components/Hero";
import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <Hero />
      
      {/* 게임 리스트 섹션 */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          Trending Games
        </h2>
        
        {/* CSS Grid를 이용해 화면 크기에 따라 1열 -> 2열 -> 3열로 자동 정렬 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GameCard title="Elden Ring" genre="Action RPG" year="2022" />
          <GameCard title="Cyberpunk 2077" genre="Action RPG" year="2020" />
          <GameCard title="Minecraft" genre="Sandbox" year="2011" />
          <GameCard title="Hades" genre="Roguelike" year="2020" />
          <GameCard title="Hollow Knight" genre="Metroidvania" year="2017" />
          <GameCard title="Crusader Kings 3" genre="Strategy" year="2020" />
        </div>
      </section>
    </main>
  );
}