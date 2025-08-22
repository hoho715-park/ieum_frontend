// 상단 GNB 구성과 하위 메뉴를 한 곳에 모아둠
const navItems = [
  {
    id: "about",
    label: "About Us",
    to: "/about",
    children: [
      { label: "이음 소개", to: "/about/ieum" },
      { label: "서비스 소개", to: "/about#service" },
    ],
  },
  {
    id: "test",
    label: "Test",
    to: "/qscc",
    children: [
      { label: "QSCC-II 설문", to: "/qscc", strong: true },
      { label: "QSCC-II 소개", to: "/qscc/whatisqscc" },
    ],
  },
  {
    id: "input",
    label: "Input",
    to: "/input",
    children: [{ label: "입력하기", to: "/input" }],
  },
  {
    id: "chat",
    label: "AI Chat",
    to: "/chat",
    children: [{ label: "대화하기", to: "/chat" }],
  },
  {
    id: "more",
    label: "More",
    to: "/more",
    children: [
      { label: "자료실", to: "/more/resources" },
      { label: "커뮤니티", to: "/more/community" },
      { label: "문의 사항", to: "/more/contact" },
    ],
  },
];

export default navItems;
