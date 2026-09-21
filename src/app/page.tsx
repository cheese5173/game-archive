import Hero from "../components/Hero"; // 👈 상대 경로로 Hero 불러오기

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      {/* 나중에 이 아래에 게임 카드 리스트가 들어갈 예정입니다 */}
    </main>
  );
}