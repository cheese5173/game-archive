// 보스 정보 설계도에 weakness(약점)와 drops(드랍 아이템) 추가
export interface Boss {
  id: string;
  name: string;
  image: string;
  description: string;
  weakness?: string;
  drops?: string[];
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  year: string;
  developer: string;
  description: string;
  features: string[];
  videoUrl: string;
  dlc?: string;
  bosses?: Boss[];
}

export const games: Game[] = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    genre: "Action RPG",
    year: "2022",
    developer: "FromSoftware",
    description: "황금 나무의 축복이 끊어진 틈새의 땅에서 엘든 링의 파편을 모아 엘데의 왕이 되기 위한 여정을 떠납니다.",
    features: ["광활한 오픈월드", "도전적인 보스 전투", "다양한 무기와 마법 조합"],
    videoUrl: "https://www.youtube.com/embed/...",
    dlc: "Shadow of the Erdtree (황금 나무의 그림자)",
    bosses: [
      {
        id: "malenia",
        name: "미켈라의 검, 말레니아",
        image: "MALENIA IMAGE", 
        description: "부패의 여신이자 틈새의 땅에서 가장 강력한 데미갓 중 하나입니다. 피흡(공격 시 체력 회복)과 물새 난격이라는 치명적인 패턴을 가졌습니다.",
        weakness: "출혈, 동상, 화염",
        drops: ["말레니아의 거대한 룬", "부패의 여신의 추억"]
      },
      {
        id: "radahn",
        name: "별 부수는 라단",
        image: "RADAHN IMAGE",
        description: "중력 마법을 다루며 붉은 에오니아의 부패에 감염된 채 사막을 떠도는 장군입니다. 수많은 NPC 백령들을 소환해 함께 싸우는 레이드 전투가 특징입니다.",
        weakness: "붉은 부패, 독, 찌르기",
        drops: ["라단의 거대한 룬", "별 부수는 기사의 추억"]
      }
    ]
  },
  {
    id: "crusader-kings-3",
    title: "Crusader Kings 3",
    genre: "Strategy",
    year: "2020",
    developer: "Paradox Interactive",
    description: "가문과 혈통을 이어가며 중세 시대를 통치하는 대전략 게임. 전쟁뿐만 아니라 외교, 암살, 결혼을 통한 복잡한 정치 공작이 특징입니다.",
    features: ["심도 있는 가문 관리", "역사적 고증과 종교 시스템", "수만 가지의 무작위 이벤트"],
    videoUrl: "https://www.youtube.com/embed/..."
  }
];