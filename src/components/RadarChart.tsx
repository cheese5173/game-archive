"use client";

import { motion } from "framer-motion";

interface Stats {
  story: number;
  graphics: number;
  action: number;
  sound: number;
  innovation: number;
  difficulty: number;
}

export default function RadarChart({ stats }: { stats: Stats }) {
  const values = [stats.story, stats.graphics, stats.action, stats.sound, stats.innovation, stats.difficulty];
  const labels = ["스토리", "그래픽", "액션", "사운드", "혁신성", "난이도"];
  
  // 차트 설정
  const max = 10;
  const center = 150;
  const radius = 100;

  // 값에 따라 x, y 좌표를 계산하는 마법의 삼각함수
  const getPointCoordinates = (value: number, index: number) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / 6; // 12시 방향부터 6각형 각도
    const distance = (value / max) * radius;
    return `${center + distance * Math.cos(angle)},${center + distance * Math.sin(angle)}`;
  };

  // 실제 데이터가 그릴 다각형 꼭짓점들
  const dataPolygon = values.map((v, i) => getPointCoordinates(v, i)).join(" ");

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square">
      <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
        
        {/* 1. 배경 거미줄 (5단계 격자) */}
        {[1, 2, 3, 4, 5].map((level) => (
          <polygon
            key={level}
            points={[0, 1, 2, 3, 4, 5].map((i) => getPointCoordinates(level * 2, i)).join(" ")}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* 2. 중앙에서 뻗어나가는 6개의 기둥 선 */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const endPoint = getPointCoordinates(10, i).split(",");
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={endPoint[0]}
              y2={endPoint[1]}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* 🌟 3. 스탯 데이터 다각형 (Framer Motion으로 그려지는 애니메이션) */}
        <motion.polygon
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          points={dataPolygon}
          fill="rgba(168, 85, 247, 0.2)" // 보라색 반투명 채우기
          stroke="#a855f7" // 쨍한 보라색 테두리
          strokeWidth="3"
        />

        {/* 🌟 4. 다각형 꼭짓점에 반짝이는 점 찍기 */}
        {values.map((v, i) => {
          const coords = getPointCoordinates(v, i).split(",");
          return (
            <motion.circle
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              cx={coords[0]}
              cy={coords[1]}
              r="4"
              fill="#fff"
              stroke="#a855f7"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* 5. 텍스트 라벨 (스토리, 그래픽 등) 배치 */}
      {labels.map((label, i) => {
        // 라벨은 차트보다 조금 더 바깥쪽(11.5)에 배치
        const coords = getPointCoordinates(11.5, i).split(",");
        return (
          <div
            key={label}
            className="absolute text-xs md:text-sm font-bold text-gray-300 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap drop-shadow-md"
            style={{ left: `${(Number(coords[0]) / 300) * 100}%`, top: `${(Number(coords[1]) / 300) * 100}%` }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}