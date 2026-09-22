import { games } from "../../../data/games";
import { notFound } from "next/navigation";
import BossGallery from "../../../components/BossGallery";
import FadeIn from "../../../components/FadeIn"; // 👈 애니메이션 부품 불러오기

export default async function GameDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-gray-200 pb-24 pt-20 overflow-hidden">
      
      {/* 타이틀 구역 애니메이션 */}
      <FadeIn>
        <header className="max-w-4xl mx-auto px-6 py-12 border-b border-white/10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">{game.title}</h1>
          <div className="flex gap-4 text-gray-400 font-medium tracking-wide">
            <span>{game.developer}</span>
            <span>•</span>
            <span>{game.genre}</span>
            <span>•</span>
            <span>{game.year}</span>
          </div>
        </header>
      </FadeIn>

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-24">
        
        {/* 트레일러 영상 구역 애니메이션 */}
        <FadeIn>
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">01. Trailer</h2>
            <div className="aspect-video bg-zinc-900 rounded-3xl flex items-center justify-center text-gray-600 font-medium border border-white/5">
              VIDEO PLAYER PLACEHOLDER
            </div>
          </section>
        </FadeIn>

        {/* 스토리 구역 애니메이션 */}
        <FadeIn>
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">02. Story</h2>
            <p className="text-2xl leading-relaxed text-gray-300 font-light">
              {game.description}
            </p>
          </section>
        </FadeIn>

        {/* 게임 특징 구역 애니메이션 */}
        <FadeIn>
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">03. Features</h2>
            <ul className="space-y-6">
              {game.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 text-xl text-gray-300">
                  <span className="text-white font-bold">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* 보스 갤러리 구역 애니메이션 */}
        {game.bosses && (
          <FadeIn>
            <section>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">04. Key Bosses</h2>
              <BossGallery bosses={game.bosses} />
            </section>
          </FadeIn>
        )}

        {/* DLC 구역 애니메이션 */}
        {game.dlc && (
          <FadeIn>
            <section>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">05. Expansion</h2>
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