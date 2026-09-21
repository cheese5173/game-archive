export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      {/* 배경 (임시로 다크 그라데이션 적용, 나중에 게임 영상으로 교체 가능!) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black -z-10" />
      
      <div className="space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Discover Your <br />
          {/* 글자에 보라색~하늘색 그라데이션 입히기 */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Next Game
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          가장 트렌디한 게임들을 탐험하고, 당신만의 컬렉션을 완성하세요.
        </p>
        
        {/* hover:scale-105 덕분에 마우스를 올리면 버튼이 부드럽게 커집니다 */}
        <button className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
          탐험 시작하기
        </button>
      </div>
    </section>
  );
}