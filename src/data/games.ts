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
  },

  // --- 새로 추가된 25개 게임 ---
  {
    id: "tomb-raider-2013",
    title: "툼레이더",
    genre: "Action Adventure",
    year: 2013,
    developer: "Crystal Dynamics",
    description: "평범한 고고학도 라라 크로프트가 야생의 생존자로 거듭나는 첫 번째 이야기.",
    features: ["활과 지형지물을 활용한 생존 액션", "긴장감 넘치는 미지의 섬 탐험", "영화 같은 퍼즐과 시네마틱 연출"],
    bosses: []
  },
  {
    id: "rise-of-the-tomb-raider",
    title: "라이즈 오브 더 툼레이더",
    genre: "Action Adventure",
    year: 2015,
    developer: "Crystal Dynamics",
    description: "불멸의 비밀을 찾아 시베리아의 설원으로 떠나는 혹한의 탐험.",
    features: ["더욱 발전된 크래프팅과 생존 시스템", "시베리아의 아름답고 위험한 설원 묘사", "거대하고 정교해진 고대 무덤 퍼즐"],
    bosses: []
  },
  {
    id: "shadow-of-the-tomb-raider",
    title: "섀도우 오브 더 툼레이더",
    genre: "Action Adventure",
    year: 2018,
    developer: "Eidos-Montréal",
    description: "마야의 종말을 막기 위해 정글의 그림자가 되어야 하는 라라의 마지막 기원 이야기.",
    features: ["정글의 환경을 활용한 은신 스텔스 액션", "시리즈 역대 최대 규모의 수중 탐험과 무덤", "어두워진 내면과 진정한 툼레이더로의 각성"],
    bosses: []
  },
  {
    id: "detroit-become-human",
    title: "디트로이트: 비컴 휴먼",
    genre: "Interactive Drama",
    year: 2018,
    developer: "Quantic Dream",
    description: "안드로이드가 자아를 갖게 된 근미래, 세 기계의 선택이 인류의 미래를 결정한다.",
    features: ["플레이어의 선택에 따라 수만 가지로 갈라지는 서사", "마커스, 카라, 코너 3인의 얽히고설킨 시점", "인간성과 기계의 경계에 대한 깊은 철학적 질문"],
    bosses: []
  },
  {
    id: "days-gone",
    title: "데이즈 곤",
    genre: "Action Adventure",
    year: 2019,
    developer: "Bend Studio",
    description: "전염병으로 멸망한 세계, 드리프터 디컨 세인트 존이 오토바이를 타고 생존을 위해 달린다.",
    features: ["화면에 수백 마리씩 쏟아지는 프리커(좀비) 호드와의 사투", "바이크 업그레이드와 연료 관리 생존 시스템", "태평양 북서부의 척박하고 아름다운 오픈 월드"],
    bosses: []
  },
  {
    id: "dead-space",
    title: "데드 스페이스",
    genre: "Survival Horror",
    year: 2008,
    developer: "Visceral Games",
    description: "통신이 두절된 우주선 이시무라 호에서 벌어지는 끔찍한 네크로모프와의 우주 생존기.",
    features: ["팔다리를 전략적으로 절단해야 하는 독특한 전투", "UI를 화면에 띄우지 않는 궁극의 몰입감(다이제틱 UI)", "우주 공간의 폐소공포증을 자극하는 사운드 디자인"],
    bosses: []
  },
  {
    id: "rdr2",
    title: "레드 데드 리뎀션 2",
    genre: "Action Adventure",
    year: 2018,
    developer: "Rockstar Games",
    description: "무법자의 시대가 저물어가는 1899년 미국, 아서 모건과 반 더 린드 갱단의 장엄한 낭만과 몰락.",
    features: ["비디오 게임 역사상 가장 생동감 넘치고 사실적인 오픈 월드", "NPC와 상호작용하는 경이로운 디테일", "눈물을 쏟게 만드는 압도적인 서사"],
    bosses: []
  },
  {
    id: "persona-5",
    title: "페르소나 5",
    genre: "JRPG",
    year: 2016,
    developer: "P-Studio",
    description: "낮에는 평범한 고등학생, 밤에는 부패한 어른들의 마음을 훔치는 '마음의 괴도단'의 활약극.",
    features: ["스타일리시함의 극치를 보여주는 UI와 아트워크", "턴제 전투의 완성도를 끌어올린 프레스 턴 시스템", "매력적인 캐릭터들과의 일상 커뮤니티(코프)"],
    bosses: []
  },
  {
    id: "danganronpa-1",
    title: "단간론파 1",
    genre: "Visual Novel",
    year: 2010,
    developer: "Spike Chunsoft",
    description: "초고교급 재능을 가진 학생들이 갇힌 희망봉 학원, 졸업하기 위한 끔찍한 살인 게임이 시작된다.",
    features: ["추리와 액션을 결합한 독특한 '학급재판' 시스템", "강렬하고 기괴한 팝 아트 스타일의 캐릭터 디자인", "모노쿠마가 선사하는 예측 불가능한 반전"],
    bosses: []
  },
  {
    id: "danganronpa-2",
    title: "단간론파 2",
    genre: "Visual Novel",
    year: 2012,
    developer: "Spike Chunsoft",
    description: "남국의 섬 재버워크에서 벌어지는 더 잔혹해진 살인 수학여행.",
    features: ["논파 기믹이 추가되어 더욱 복잡해진 학급재판", "아름다운 휴양지와 대비되는 절망적인 스토리", "전작을 뒤집는 충격적인 진실"],
    bosses: []
  },
  {
    id: "danganronpa-v3",
    title: "단간론파 V3",
    genre: "Visual Novel",
    year: 2017,
    developer: "Spike Chunsoft",
    description: "사이슈 학원을 무대로, 거짓말을 무기로 삼아 진실을 파헤치는 새로운 살인 신학기.",
    features: ["자신의 발언을 '거짓말'로 위장하여 재판을 유도하는 시스템", "가장 화려해진 재판 연출과 미니 게임", "시리즈의 근간을 흔드는 호불호 강한 결말"],
    bosses: []
  },
  {
    id: "ac-origins",
    title: "어쌔신 크리드: 오리진",
    genre: "Stealth Action Game",
    year: 2017,
    developer: "Ubisoft",
    description: "고대 이집트를 무대로, 암살단이 창설된 기원을 다루는 바예크의 복수극.",
    features: ["RPG 요소가 본격 도입된 시리즈의 성공적인 터닝 포인트", "경이로운 고증으로 구현된 이집트와 피라미드 탐험", "독수리 세누를 활용한 정찰 시스템"],
    bosses: []
  },
  {
    id: "ac-unity",
    title: "어쌔신 크리드: 유니티",
    genre: "Stealth Action Game",
    year: 2014,
    developer: "Ubisoft",
    description: "프랑스 대혁명 시기의 파리, 템플 기사단과 암살단의 음모 속에서 아르노 핑계가 겪는 이야기.",
    features: ["수천 명의 군중이 구현된 당시 최고의 그래픽 기술", "실물 스케일의 노틀담 대성당과 파리 시내 파쿠르", "가장 부드럽고 매끄러운 파쿠르 모션"],
    bosses: []
  },
  {
    id: "ac-odyssey",
    title: "어쌔신 크리드: 오디세이",
    genre: "Action RPG",
    year: 2018,
    developer: "Ubisoft",
    description: "펠로폰네소스 전쟁이 한창인 고대 그리스에서 펼쳐지는 용병 미스티오스의 방대한 오디세이.",
    features: ["선택지가 도입된 대화 시스템과 멀티 엔딩", "광활한 에게 해를 누비는 해상전", "신화 속 괴물들과의 압도적인 보스전"],
    bosses: []
  },
  {
    id: "sekiro",
    title: "세키로: 섀도우 다이 트와이스",
    genre: "Action Adventure",
    year: 2019,
    developer: "FromSoftware",
    description: "전국 시대 말기, 주군을 지키기 위해 검을 든 닌자 '늑대'의 목숨을 건 혈투.",
    features: ["적의 공격을 튕겨내는 '패링(튕겨내기)' 중심의 극강 전투 쾌감", "갈고리를 활용한 입체적인 이동과 닌자 의수", "체력이 아닌 '체간'을 무너뜨리는 쫄깃한 시스템"],
    bosses: []
  },
  {
    id: "metro-exodus",
    title: "메트로 엑소더스",
    genre: "FPS",
    year: 2019,
    developer: "4A Games",
    description: "핵전쟁으로 파괴된 러시아 툰드라를 가로지르는 오로라 호와 아르티옴의 장엄한 기차 여행.",
    features: ["지하철에서 벗어나 광활한 사계절의 지상으로 무대 확장", "총기 청소와 자원 관리가 필수인 하드코어 생존", "레이트레이싱이 적용된 숨막히는 그래픽"],
    bosses: []
  },
  {
    id: "twd-season1",
    title: "워킹 데드 시즌 1",
    genre: "Interactive Drama",
    year: 2012,
    developer: "Telltale Games",
    description: "좀비 아포칼립스 속에서 범죄자 리 에버렛과 어린 소녀 클레멘타인이 만들어가는 눈물겨운 유대.",
    features: ["극한의 도덕적 딜레마를 강요하는 선택지", "플레이어의 선택을 기억하는 캐릭터들", "게임 역사상 가장 감동적인 결말 중 하나"],
    bosses: []
  },
  {
    id: "twd-season2",
    title: "워킹 데드 시즌 2",
    genre: "Interactive Drama",
    year: 2013,
    developer: "Telltale Games",
    description: "이제는 스스로 생존하는 법을 배워야 하는 어린 소녀 클레멘타인의 잔혹한 여정.",
    features: ["보호자 없이 가혹한 세계를 마주하는 주인공의 시점", "전작보다 더욱 절망적이고 암울해진 상황들", "이전 시즌의 선택이 반영되는 서사"],
    bosses: []
  },
  {
    id: "twd-new-frontier",
    title: "워킹 데드: 뉴 프론티어",
    genre: "Interactive Drama",
    year: 2016,
    developer: "Telltale Games",
    description: "새로운 주인공 하비와 한층 성장한 클레멘타인이 가족을 지키기 위해 맞서는 이야기.",
    features: ["새로운 생존자 그룹의 시점으로 전개되는 이야기", "업그레이드된 그래픽 엔진과 연출", "성장하여 더 강인해진 클레멘타인의 등장"],
    bosses: []
  },
  {
    id: "dispatch",
    title: "디스패치",
    genre: "Interactive Drama",
    year: 2025,
    developer: "adhoc studio",
    description: "정보가 확인되지 않은 타이틀입니다.",
    features: ["일반적인 슈퍼히어로물과 달리 '직장', 과 '일상'이라는 공간에 초점", "플레이어는 슈퍼히어로 콜센터의 디스패처(긴급신고 접수요원) 역할을 맡는다. 이러한 게임 방식은 911 Operator나 This Is the Police 시리즈와 매우 유사하다.", "미확인 특징 2"],
    bosses: []
  },
  {
    id: "dishonored-1",
    title: "디스아너드",
    genre: "Stealth Action Game",
    year: 2012,
    developer: "Arkane Studios",
    description: "여제를 암살했다는 누명을 쓴 호국경 코르보 아타노가 가면을 쓰고 그림자 속에서 벌이는 복수극.",
    features: ["마법(점멸 등)과 물리 엔진을 창의적으로 결합하는 플레이", "불살(은신)과 학살에 따라 완전히 변하는 혼돈도 시스템", "산업혁명과 고래기름이 결합된 독특한 스팀펑크 세계관"],
    bosses: []
  },
  {
    id: "dishonored-2",
    title: "디스아너드 2",
    genre: "Stealth Action Game",
    year: 2016,
    developer: "Arkane Studios",
    description: "코르보 혹은 에밀리가 되어 찬탈자 딜라일라로부터 왕좌를 되찾기 위한 남부 카르나카로의 여정.",
    features: ["2명의 플레이어블 캐릭터와 각기 다른 초능력 트리", "시간 여행과 태엽 저택 등 게임 역사에 남을 천재적인 레벨 디자인", "한층 더 정교해진 잠입 및 암살 루트"],
    bosses: []
  },
  {
    id: "little-nightmares",
    title: "리틀 나이트메어",
    genre: "Puzzle Platformer",
    year: 2017,
    developer: "Tarsier Studios",
    description: "기괴한 해저식당 '목구멍'에 갇힌 노란 우비 소녀 식스의 탈출기.",
    features: ["대사 한 마디 없이 묘사되는 소름 돋는 그로테스크 아트", "거대한 어른들을 피해 도망치는 숨바꼭질의 공포", "상상력을 자극하는 충격적인 메타포"],
    bosses: []
  },
  {
    id: "outlast",
    title: "아웃라스트",
    genre: "Survival Horror",
    year: 2013,
    developer: "Red Barrels",
    description: "무기 하나 없이 캠코더 하나만 들고 정신병원의 끔찍한 진실을 취재하러 간 기자의 악몽.",
    features: ["반격 불가, 오직 '도망'과 '숨기'만 가능한 극한의 공포", "캠코더 적외선 모드와 배터리를 관리하는 긴장감", "광인들의 끈질긴 추격과 점프스케어"],
    bosses: []
  },
  {
    id: "clair-obscur-33",
    title: "클레르 옵스퀴르 33",
    genre: "Turn-based RPG",
    year: 2025,
    developer: "Sandfall Interactive",
    description: "매년 사람들의 수명을 지워버리는 '페인트메이커'에 맞서 인류를 구원하기 위한 원정대 33의 여정.",
    features: ["언리얼 엔진 5로 구현된 환상적인 벨 에포크 시대의 아트 스타일", "실시간 액션(패링, 회피)이 결합된 진화된 턴제 전투", "강렬하고 비극적인 서사와 프랑스 예술의 조화"],
    bosses: []
  }
];
