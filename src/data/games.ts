// 1. 상세 페이지가 요구하는 데이터 형식(features, developer 등)을 추가했습니다.
export interface Game {
  id: string;
  title: string;
  genre: string;
  year: number;
  description: string;
  developer: string;
  features: string[];
  bosses?: { name: string; description: string; }[]; // 나중에 보스 갤러리에서 쓸 데이터
  dlc?: string;
  imageUrl?: string; // 메인 포스터나 배경 이미지 경로 (예: "/images/elden-ring.jpg")
  trailerId?: string; // 유튜브 영상 ID (예: "E3Huy2cdih0")
}

// 2. 각 게임마다 누락되었던 특징(features) 배열을 추가했습니다.
export const games: Game[] = [
  {
    id: "elden-ring",
    title: "엘든 링",
    genre: "Action RPG",
    year: 2022,
    developer: "FromSoftware",
    description: "틈새의 땅에서 빛바랜 자가 되어 엘든 링의 왕이 되는 장대한 여정.",
    features: ["방대하고 입체적인 오픈 월드 탐험", "수십 가지의 무기와 마법 조합", "프롬 소프트웨어 특유의 극한의 난이도와 성취감"],
    trailerId: "E3Huy2cdih0",
    bosses: [
      { name: "말레니아", description: "미켈라의 칼날. 부패의 여신으로 각성하며 수많은 플레이어를 좌절시킨 엘든 링 최고의 난이도 보스." },
      { name: "라단", description: "별 부수는 영웅. 부패에 먹혀가면서도 중력 마법으로 별의 운행을 붙잡고 있는 최강의 데미갓." },
      { name: "고드릭", description: "접목의 군주. 힘에 대한 집착으로 수많은 빛바랜 자들의 팔다리를 자신에게 접목시킨 지배자." },
      { name: "모르고트", description: "축복왕. 흉조로 태어나 버림받았음에도 황금 나무를 수호하기 위해 홀로 로데일의 왕좌를 지키는 비운의 보스." }
    ]
  },
  {
    id: "bg3",
    title: "발더스 게이트 3",
    genre: "CRPG",
    year: 2023,
    developer: "Larian Studios",
    description: "주사위가 당신의 운명을 결정하는 잊혀진 세계관 기반의 궁극적인 롤플레잉 경험.",
    features: ["선택에 따라 완전히 달라지는 거대한 스토리 분기", "전략적인 턴제 D&D 전투 시스템", "매력적이고 입체적인 동료 캐릭터들"],
    bosses: []
  },
  {
    id: "cyberpunk-2077",
    title: "사이버펑크 2077",
    genre: "Action RPG",
    year: 2020,
    developer: "CD PROJEKT RED",
    description: "권력, 사치, 신체 개조에 집착하는 거대 도시 나이트 시티를 배경으로 한 오픈 월드 어드벤처.",
    features: ["압도적인 비주얼의 미래 도시 나이트 시티", "다양한 신체 사이버웨어 개조", "몰입감 넘치는 1인칭 시점 액션"],
     trailerId: "8X2kIfS6fb8",
    bosses: []
  },
  {
    id: "ghost-of-tsushima",
    title: "고스트 오브 쓰시마",
    genre: "Action Adventure",
    year: 2020,
    developer: "Sucker Punch",
    description: "몽골 제국의 침략에 맞서 쓰시마 섬을 지키기 위한 사카이 진의 고독한 사무라이 액션.",
    features: ["바람이 길을 안내하는 아름다운 오픈 월드", "절도 있고 묵직한 카타나 검술 액션", "무사의 명예와 망령의 길 사이의 갈등"],
    bosses: []
  },
  {
    id: "god-of-war",
    title: "갓 오브 워",
    genre: "Action Adventure",
    year: 2018,
    developer: "Santa Monica Studio",
    description: "북유럽 신화의 가혹한 세계에서 크레이토스와 그의 아들 아트레우스가 펼치는 서사시.",
    features: ["끊기지 않는 롱테이크 카메라 연출", "리바이어던 도끼를 활용한 묵직한 액션", "아버지와 아들의 깊이 있는 서사"],
    bosses: []
  },
  {
    id: "kcd2",
    title: "킹덤 컴: 딜리버런스 2",
    genre: "Action RPG",
    year: 2025,
    developer: "Warhorse Studios",
    description: "15세기 보헤미아 내전을 배경으로 펼쳐지는 헨리의 사실적이고 처절한 중세 생존기.",
    features: ["철저한 역사적 고증을 거친 15세기 유럽", "실제 검술을 바탕으로 한 1인칭 전투", "플레이어의 평판에 반응하는 사실적인 NPC"],
    bosses: []
  }
];