import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./IntroStyles";

const Intro = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        This is <br />
        Paul's Personal Portfolio
      </SectionTitle>
      <SectionText>
        저를 소개합니다. 저는 ... 입니다. 제 경력은 ... .입니다 등등등.
      </SectionText>
      <Button onClick={() => (window.location = "https://youtube.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Intro;
