import React, { useEffect, useRef } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { useTracking } from "../../contexts/trackers";
import { ClickMouseEvent} from "../../types/commonType";
import { ProjectType } from "../../constants/types";

const Projects = () => {
  const { logEvent } = useTracking();
  const containerEl = useRef<HTMLDivElement>(null);
  // let isIntersectionAvailable = false;
  let observer = null;

  useEffect(() => {
    if ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype){
      
      const options = {
        rootMargin: "30px 0px",
        threshold: [0.5, 1],
      }

      const callback = entries => {
        entries.forEach((entry) => {
          const target = entry.target;
          target.classList.add("animation");
          const targetImage = target.querySelector("img");
          const ratio = entry.intersectionRatio;
          switch(true) {
            case ( ratio <= 1 && ratio > 0.55) :
              target.style.opacity = 1;
              target.style.transform = "scale(1.0)";
              !targetImage.src && (targetImage.src = targetImage.dataset.src);
              return;
            case ( ratio <= 0.55 && ratio >= 0.2 ):
              target.style.opacity = 0.5;
              target.style.transform = 'scale(0.96)';
              !targetImage.src && (targetImage.src = targetImage.dataset.src);
              return;

            case ( ratio < 0.2 ):
              target.style.opacity = 0.15;
              target.style.transform = 'scale(0.92)';
              return;

              default:
              return;
          }
        })
      }
      observer = new IntersectionObserver(callback, options)
    } else {
      const targets = containerEl.current?.querySelectorAll('img');
      targets?.forEach((image) => image.src = image.dataset.src);
    }
    return () => {
      observer && observer.disconnect();
      observer = null;
    }
  })

  useEffect(() => {
    if (observer) {
      const targets = containerEl.current.querySelectorAll('.card')
      targets.forEach((target) => observer.observe(target));
    }
  })

  const handleClick = ( e : ClickMouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (target) {
      logEvent({
        category: 'Project Component',
        action: `clicked ${target.dataset.id} on the project`,
        label: 'Special Label'
      })
    }
  }

  const Template = ({ id, image, title, description, tags, source, code }: ProjectType) => (
    <BlogCard key={id} className="card">
      <Img data-src={image} />
      <TitleContent>
        <HeaderThree>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks 
          data-id={`${title}-Code`}
          href={code ? code : "#none"} 
          target="_blank" 
          className={ !code.length? "disabled" : ""} 
          onClick={handleClick}
        > 
          Code 
        </ExternalLinks>
        <ExternalLinks 
          data-id={`${title}-Visit`}
          href={source ? source : "#none"} 
          target="_blank" 
          className={ !source.length? "disabled" : ""}
          onClick={handleClick}
        >
          Visit
        </ExternalLinks>
      </UtilityList>
    </BlogCard>
  )

  return ( 
    <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer ref={containerEl}>
      { projects.map(({ id, image, title, description, tags, source, code }) => (
        <Template 
          key={id} 
          id={id} 
          image={image} 
          title={title} 
          description={description} 
          tags={tags} 
          source={source} 
          code={code} 
        />
      )
    )}
    </GridContainer>
  </Section>
  )
};

export default Projects;
