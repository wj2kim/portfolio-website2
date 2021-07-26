import React from "react";
import {
  SiReact,
  SiGitlab,
  SiJavascript,
  SiTypescript,
  SiWebrtc,
  SiStorybook,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListItem,
  ListParagraph,
} from "./SkillsStyles";
import { skillIntro } from "../../constants/constants";

const Skills = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle main>Skills</SectionTitle>
    <SectionText dangerouslySetInnerHTML={{ __html: skillIntro }}></SectionText>
    <List>
      <ListItem>
        <SiReact size="3rem" />
        <ListParagraph>React.js</ListParagraph>
      </ListItem>
      <ListItem>
        <SiJavascript size="3rem" />
        <ListParagraph>JavaScript</ListParagraph>
      </ListItem>
      <ListItem>
        <SiTypescript size="3rem" />
        <ListParagraph>TypeScript</ListParagraph>
      </ListItem>
      <ListItem>
        <SiWebrtc size="3rem" />
        <ListParagraph>WebRTC</ListParagraph>
      </ListItem>
      <ListItem>
        <SiHtml5 size="3rem" />
        <ListParagraph>HTML5</ListParagraph>
      </ListItem>
      <ListItem>
        <SiCss3 size="3rem" />
        <ListParagraph>CSS3</ListParagraph>
      </ListItem>
      <ListItem>
        <SiGitlab size="3rem" />
        <ListParagraph>Gitlab</ListParagraph>
      </ListItem>
      <ListItem>
        <SiStorybook size="3rem" />
        <ListParagraph>Storybook</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
