import React, { useRef } from "react";

import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxImage, BoxTitle, BoxText } from "./BlogsStyles";
import { blogs } from "../../constants/constants";
import { useTracking } from "../../contexts/trackers";
import { ClickMouseEvent, OnMouseOverEvent} from "../../types/commonType";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Blogs = () => {
  const { logEvent } = useTracking();
  const containerEl = useRef<HTMLDivElement>(null);

  const options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: [0, 0.5],
  }

  const effect = (entries : IntersectionObserverEntry[]) => {
    entries.forEach((entry : IntersectionObserverEntry) => {
      const target = entry.target as HTMLDivElement;
      target.classList.add("animation");
      const targetImage = target.querySelector("img") as HTMLImageElement;
      if (!target || !targetImage) return;
      const ratio = entry.intersectionRatio;
      switch(true) {
        case ( ratio <= 1 && ratio > 0.45 ):
          target.classList.remove("animation__start");
          target.classList.add("animation__done");
          !targetImage.src && (targetImage.src = targetImage.dataset.src || "");
          return;
        case ( ratio <= 0.45 && ratio >= 0 ):
          target.classList.remove("animation__done");
          target.classList.add("animation__start");
          return;
        default:
          return;
      }
    })
  }

  const disableEffect = (containerEl: React.RefObject<HTMLDivElement>) => {
    const targets = containerEl.current?.querySelectorAll("img");
    targets?.forEach((image: HTMLImageElement) => image.src = image.dataset.src || "");   
  }

  const isActive = useIntersectionObserver({refElement: containerEl, effect, options}) || false;
  if (!isActive) {
    disableEffect(containerEl);
  }

  const handleClick = ( e : ClickMouseEvent) => {
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

  const handleMouseOver = (e: OnMouseOverEvent) => {
    const target = e.target as HTMLAnchorElement;
    target.classList.remove("animation");
  }

  return (
    <Section id="blogs">
      <SectionDivider />
      <SectionTitle main>Blogs</SectionTitle>
      <Boxes ref={containerEl}>
        {blogs.map((card, index) => (
          <Box key={index} className="observe" href={card.link} target="_blank" data-id={card.title} onMouseOver={handleMouseOver} onClick={handleClick}>
            <BoxImage data-src={card.imageURL}/>
            <BoxTitle>{card.title}</BoxTitle>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  )
};

export default Blogs;
