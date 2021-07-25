import React from "react";

import {
  Section,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { IntroSection } from "./IntroStyles";

const Intro = () => (
  <Section row nopadding bottom right>
    <IntroSection>
      <h2>김우정</h2>
      <h2>Paul WooJung Kim</h2>
      <p>FRONTEND ENGINEER</p>
      <p>2021/07/25</p>
    </IntroSection>
  </Section>
);

export default Intro;
