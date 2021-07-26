import React from "react";
import { Section } from "../../styles/GlobalComponents";
import { IntroSection } from "./IntroStyles";
import { detailed, intro } from "../../constants/constants";

const Intro = () => (
  <Section row nopadding bottom right>
    <IntroSection>
      <h2>{detailed.koreanName}</h2>
      <h2>{detailed.englishName}</h2>
      <p>{intro.job}</p>
      <p>{intro.madeDate}</p>
    </IntroSection>
  </Section>
);

export default Intro;
