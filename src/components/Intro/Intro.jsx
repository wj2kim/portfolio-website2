import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./IntroStyles";

const Intro = () => (
  <Section row nopadding bottom left>
    <div className="detail">
      <h2>김우정</h2>
      <h2>Paul WooJung Kim</h2>
      <p>FRONTEND ENGINEER</p>
      <span>2021/07/25</span>
    </div>
    {/* <LeftSection> */}
      {/* <SectionTitle main center>
        Personal <br/> Portfolio
      </SectionTitle>
      <SectionText>
        FRONTEND ENGINNER<br/>김우정
      </SectionText> */}
      {/* <Button onClick={() => (window.location = "https://youtube.com")}>
        Learn More
      </Button> */}
      {/* <SectionImage>
        <div className="image-container">
          <img class="model-left" src="/images/paul_left2.jpg" alt="profile_left" />
          <img class="model-right" src="/images/paul_right2.jpg" alt="profile_right" />
        </div>
      </SectionImage> */}
    {/* </LeftSection> */}
  </Section>
);

export default Intro;
