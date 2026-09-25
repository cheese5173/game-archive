import { games } from "../../../data/games";
import { notFound } from "next/navigation";
import BossGallery from "../../../components/BossGallery";
import FadeIn from "../../../components/FadeIn";
import CinematicHero from "../../../components/CinematicHero"; // 👈 새로 만든 부품 불러오기

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-gray-200 pb-24">
      
      {/* 🎬 새롭게 만든 커스텀 시네마틱 히어로 컴포넌트 삽입 */}
      <CinematicHero game={game} />

      {/* 📖 하단 상세 콘텐츠 영역 */}
      <div className="max-w-4xl mx-auto px-6 space-y-24 relative z-20">
        
        {/* 스토리 구역 */}
        <FadeIn>
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">01. Story</h2>
            <p className="text-2xl leading-relaxed text-gray-300 font-light">
              {game.description}
            </p>
          </section>
        </FadeIn>

        {/* 게임 특징 구역 */}
        <FadeIn>
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">02. Features</h2>
            <ul className="space-y-6">
              {game.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 text-xl text-gray-300">
                  <span className="text-white font-bold opacity-30">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 보스 갤러리 구역 */}
        {game.bosses && game.bosses.length > 0 && (
          <FadeIn>
            <section>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">03. Key Bosses</h2>
              <BossGallery bosses={game.bosses} />
            </section>
          </FadeIn>
        )}

        {/* DLC 구역 */}
        {game.dlc && (
          <FadeIn>
            <section>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">04. Expansion</h2>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                {game.dlc}
              </div>
            </section>
          </FadeIn>
        )}
        
      </div>
    </main>
  );
}