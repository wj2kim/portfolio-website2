import React from "react";

import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxImage, BoxTitle, BoxText } from "./BlogsStyles";
import { blogs } from "../../constants/constants";
import { useTracking } from "../../contexts/trackers";

const Blogs = () => {
  const { logEvent } = useTracking();

  const handleClick = ( e : Event) => {
    const target = e.target as HTMLAnchorElement;
    const anchorTag = target.closest('a');
    if (anchorTag) {
      logEvent({
        category: 'Blog Component',
        action: `clicked ${anchorTag.dataset.id} on the blog`,
        label: 'Special Label'
      })
    }
  }
  return (
    <Section id="blogs">
      <SectionDivider />
      <SectionTitle main>Blogs</SectionTitle>
      <Boxes>
        {blogs.map((card, index) => (
          <Box key={index} href={card.link} target="_blank" data-id={card.title} onClick={handleClick}>
            <BoxImage src={card.imageURL}/>
            <BoxTitle>{card.title}</BoxTitle>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  )
};

export default Blogs;
