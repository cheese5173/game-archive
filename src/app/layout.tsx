import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal"; // 🌟 검색 모달 불러오기

export const metadata: Metadata = {
  title: "Game Archive",
  description: "Trendy Game Archive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Header />

        {/* 🌟 필름 그레인 (노이즈) 오버레이 */}
        <svg 
          className="pointer-events-none fixed inset-0 z-[1000] h-full w-full opacity-[0.04] mix-blend-screen"
          aria-hidden="true"
        >
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        
        {children}

        {/* 🌟 전역 단축키 검색 모달 추가 */}
        <SearchModal />
      </body>
    </html>
  );
}