import React from "react";

import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxImage, BoxTitle, BoxText } from "./BlogsStyles";

const data = [
  { imageURL: "/images/blogs/blog_image1.png", link: "https://dont-stay-hungry.tistory.com/25", title: "ECMAScript 2021 추가되는 기능들 소개", text: "JavaScript의 스펙을 정의하는 ECMAScript는 모던 자바스크립트의 시작점이라고 불리는 2015년 이후 매해 6월에 Stage 4 단계..."},
  { imageURL: "/images/blogs/blog_image2.jpeg", link: "https://dont-stay-hungry.tistory.com/24", title: "절전모드에서 돌아왔을때 크롬 프리징 현상", text: "Window 10에서 chrome 웹 브라우저 이용 시 절전모드에서 돌아오면 브라우저가 프리징 될 때가 있다. 스크롤이 안 먹고 타이핑 및..."},
  { imageURL: "/images/blogs/blog_image3.png", link: "https://dont-stay-hungry.tistory.com/23", title: "[WebRTC API] WebRTC 초보자 가이드", text: "브라우저에서 오디오, 비디오와 같은 미디어 장치를 포착하여 타 브라우저에 스트림 할 수 있을 뿐만 아니라 데이터 통신도 지원하는 기술..."},
  { imageURL: "/images/blogs/blog_image4.jpeg", link: "https://dont-stay-hungry.tistory.com/7?category=934074", title: "신입 프론트엔드 개발자의 첫 3개월 [1편]", text: "지난 3개월을 되돌아보면 나는 과연 잘 살았다고 할 수 있을까? n개월의 수습기간을 거쳐야 정직원이 되는 보통의 IT회사와 같이 내가 입..."},
];

const Blogs = () => (
  <Section id="blogs">
    <SectionDivider />
    <SectionTitle main>Blogs</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} href={card.link} target="_blank">
          <BoxImage src={card.imageURL}/>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Blogs;
