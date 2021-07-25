import React from "react";

import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxImage, BoxTitle, BoxText } from "./BlogsStyles";
import { blogs } from "../../constants/constants";


const Blogs = () => (
  <Section id="blogs">
    <SectionDivider />
    <SectionTitle main>Blogs</SectionTitle>
    <Boxes>
      {blogs.map((card, index) => (
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
