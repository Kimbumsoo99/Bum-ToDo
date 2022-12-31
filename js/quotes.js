const quotes = [
  {
    quote: "개발자는 문제를 해결하는사람이지 코딩하는 사람이 아니다",
    author: "- 배달의 민족 CEO -",
  },
  {
    quote: "후회하지말자",
    author: "- 다짐 -",
  },
  {
    quote: "차근차근 놓치지 말고 하나씩 해결해나가자",
    author: "- 다짐 -",
  },
  {
    quote: "좋게 만들 수 없다면 적어도 좋아 보이게 만들어라",
    author: "- 빌게이츠 -",
  },
  {
    quote:
      "올바로 작동하지 않는다고 걱정하지 마라\n만일 모든 게 잘 된다면 굳이 당신이 일할 이유가 없다",
    author: "- 모셔의 법칙 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote + "\n";
author.innerText = todaysQuote.author;
