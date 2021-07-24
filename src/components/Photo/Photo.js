import React from "react";
import { Section } from "../../styles/GlobalComponents";
import { SectionImage } from "./PhotoStyles";

const Photo = () => (
  <Section row nopadding center>
    <SectionImage>
			<div className="image-container">
					<img className="model__left" src="/images/paul_left5.jpg" alt="profile_left" />
					<img className="model__right" src="/images/paul_right5.jpg" alt="profile_right" />
			</div>
    </SectionImage>
  </Section>
);

export default Photo;
