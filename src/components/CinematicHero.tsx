"use client";

import { useRef, useState } from "react";
import FadeIn from "./FadeIn";

interface CinematicHeroProps {
  game: {
    title: string;
    developer: string;
    genre: string;
    year: number;
    trailerId?: string;
    titleSize?: string;
  };
}

export default function CinematicHero({ game }: CinematicHeroProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);

  const togglePlay = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    const action = isPlaying ? "pauseVideo" : "playVideo";
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: action, args: [] }),
      "*"
    );
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    const action = isMuted ? "unMute" : "mute";
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: action, args: [] }),
      "*"
    );
    setIsMuted(!isMuted);

    if (isMuted && volume === 0) {
      setVolume(50);
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [50] }),
        "*"
      );
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);

    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "setVolume", args: [newVolume] }),
      "*"
    );

    if (newVolume === 0 && !isMuted) {
      setIsMuted(true);
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute", args: [] }),
        "*"
      );
    } else if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: [] }),
        "*"
      );
    }
  };

  // 🌟 한글 폭을 고려하여 8글자 초과 시 크기를 줄이도록 수정
  const autoTitleSize = game.title.length > 8 
    ? "text-4xl md:text-5xl lg:text-6xl max-w-full" // 킹덤컴 등 (8글자 넘으면 적당한 크기로 1줄 유지)
    : "text-6xl md:text-[7rem] lg:text-[8.5rem]"; // 엘든링 등 (8글자 이하면 아주 거대하게)
  // 수동 설정된 titleSize가 있으면 그것을, 없으면 자동 계산된 사이즈를 사용
  const finalTitleSize = game.titleSize || autoTitleSize;

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-end justify-start mb-20 overflow-hidden">
      
     {/* 🎬 배경 영상 */}
      <div className="absolute inset-0 bg-zinc-900 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <iframe
          ref={iframeRef}
          /* 🌟 youtube.com 대신 youtube-nocookie.com 사용! */
          src={`https://www.youtube-nocookie.com/embed/${game.trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${game.trailerId}&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&enablejsapi=1`}
          className="absolute w-full h-[110%] -top-[10%] object-cover scale-[1.1] opacity-40 pointer-events-none"
          allow="autoplay; encrypted-media"
          title={`${game.title} Background`}
          tabIndex={-1}
        />
      </div>

      {/* 그라데이션 오버레이 (영상을 덜 가리도록 하단 어둠 비중을 살짝 높였습니다) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      {/* 텍스트 & 커스텀 컨트롤러 영역 */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        
        {/* 타이틀 정보 */}
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 font-bold tracking-widest uppercase text-xs md:text-sm mb-6">
            <span className="bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              {game.developer}
            </span>
            <span className="text-white/30">•</span>
            <span>{game.genre}</span>
            <span className="text-white/30">•</span>
            <span>{game.year}</span>
          </div>
          
          {/* 🌟 수정된 타이틀 렌더링 부분 */}
          <h1 className={`${finalTitleSize} font-black text-white tracking-tighter uppercase leading-tight drop-shadow-2xl break-keep`}>
            {game.title}
          </h1>
        </FadeIn>

        {/* 🎛️ 예쁜 커스텀 조작 버튼들 */}
        <FadeIn>
          <div className="flex items-center gap-4 md:mb-4">
            
            <button
              onClick={togglePlay}
              className="w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 transition-all"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 h-12 hover:bg-white/20 transition-all">
              <button onClick={toggleMute} className="text-white shrink-0 hover:scale-110 transition-transform">
                {isMuted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                )}
              </button>
              
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 md:w-24 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}