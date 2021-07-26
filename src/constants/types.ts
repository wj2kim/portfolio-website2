/** welcome section */
export type nameType = string;

export type DetailedType = {
  koreanName: string;
  englishName: string;
  location: string;
  red: string;
  blue: string;
  birthDay: string;
}

export const detailed: DetailedType = {
  koreanName: "김우정",
  englishName: "Paul WooJung Kim",
  location: "Lives in Seoul, ",
  red: "South ",
  blue: "Korea",
  birthDay: string;
};

/** intro & myWord section */
export const intro = {
  job: "FRONTEND ENGINEER",
  madeDate: "2021/07/25",
};

export const myWords = {
  englishQuote: "You don't make mistake, mistake makes you",
  koreanQuote:
    "자바스크립트를 사용하여<br/>개발하는 것을 좋아하고<br/>효율적인 프로세스와<br/>좋은 UI/UX에 욕심이<br/>있는 개발자 입니다.",
};

/** project section */
export const projects = [
  {
    title: "Remote Meeting (WebRTC App)",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/projects/remoteMeeting_main.png",
    tags: ["JavaScript", "TypeScript", "React", "WebRTC"],
    source: "https://www.remotemeeting.com/",
    code: "",
    id: 0,
  },
  {
    title: "Remote Meeting Admin",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/projects/remoteMeetingAdmin_main.png",
    tags: ["JavaScript", "Jquery", "JSP"],
    source: "https://www.remotemeeting.com/rmadmin",
    code: "",
    id: 1,
  },
  {
    title: "Siren Order App",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/projects/siren_order_main.png",
    tags: ["JavaScript", "React", "Redux", "Firebase"],
    source: "https://shrouded-castle-16616.herokuapp.com/",
    code: "https://github.com/wj2kim/siren-order-app",
    id: 2,
  },
  {
    title: "Personal Porfolio Website 1",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/projects/portfolio1_main.png",
    tags: ["JavaScript", "React", "MaterializeCSS"],
    source: "https://paulwoojungkim.netlify.app/",
    code: "https://github.com/wj2kim/portfolio-website/",
    id: 3,
  },
  {
    title: "Chat App (Netty Framework)",
    description:
      "NChat is a chat server built with the help of powerful network framework Netty. The server and clients communicate with binary format through TCP/IP protocol under CLI.",
    image: "/images/projects/nchat_main.png",
    tags: ["Java", "Netty Framework"],
    source: "",
    code: "https://github.com/wj2kim/NChat/",
    id: 4,
  },
];

/** skills section */
export const skillIntro =
  "I love making web interactive.<br/> These are the skills I am experienced with.";

/** blogs section */

export const blogs = [
  {
    imageURL: "/images/blogs/blog_image1.png",
    link: "https://dont-stay-hungry.tistory.com/25",
    title: "ECMAScript 2021 추가되는 기능들 소개",
    text: "JavaScript의 스펙을 정의하는 ECMAScript는 모던 자바스크립트의 시작점이라고 불리는 2015년 이후 매해 6월에 Stage 4 단계...",
  },
  {
    imageURL: "/images/blogs/blog_image2.jpeg",
    link: "https://dont-stay-hungry.tistory.com/24",
    title: "절전모드에서 돌아왔을때 크롬 프리징 현상",
    text: "Window 10에서 chrome 웹 브라우저 이용 시 절전모드에서 돌아오면 브라우저가 프리징 될 때가 있다. 스크롤이 안 먹고 타이핑 및...",
  },
  {
    imageURL: "/images/blogs/blog_image3.png",
    link: "https://dont-stay-hungry.tistory.com/23",
    title: "[WebRTC API] WebRTC 초보자 가이드",
    text: "브라우저에서 오디오, 비디오와 같은 미디어 장치를 포착하여 타 브라우저에 스트림 할 수 있을 뿐만 아니라 데이터 통신도 지원하는 기술...",
  },
  {
    imageURL: "/images/blogs/blog_image4.jpeg",
    link: "https://dont-stay-hungry.tistory.com/7?category=934074",
    title: "신입 프론트엔드 개발자의 첫 3개월 [1편]",
    text: "지난 3개월을 되돌아보면 나는 과연 잘 살았다고 할 수 있을까? n개월의 수습기간을 거쳐야 정직원이 되는 보통의 IT회사와 같이 내가 입...",
  },
];

/** footer section */

export const footerData = {
  phone: "010-5660-6172",
  email: "wj2kim@gmail.com",
  copyright: "PAUL WOOJUNG KIM 2021 - ALL RIGHTS RESERVED",
};
