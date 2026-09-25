import Link from "next/link";

export default function Header() {
  return (
    // sticky: 스크롤을 내려도 화면 상단(top-0)에 고정
    // bg-black/60: 배경을 60% 정도의 반투명한 검은색으로 설정
    // backdrop-blur-lg: 배경 뒤쪽을 강하게 흐리게(블러) 처리하여 유리 질감(Glassmorphism) 구현
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 🌟 로고 영역 (수정: 이름은 ARCHIVE, 이동할 곳은 "/" 메인 페이지) */}
        <Link href="/" className="text-lg font-black tracking-widest text-white hover:text-gray-300 transition-colors uppercase">
          ARCHIVE
        </Link>
        
        {/* 🌟 우측 네비게이션 메뉴 (수정: 이동할 곳은 "/games" 전체 카드 섹션) */}
        <nav className="flex gap-6 text-sm font-bold text-gray-400">
          <Link href="/games" className="hover:text-white transition-colors">
            Games
          </Link>
          <button className="hover:text-white transition-colors cursor-not-allowed">
            About
          </button>
        </nav>
        
      </div>
    </header>
  );
}