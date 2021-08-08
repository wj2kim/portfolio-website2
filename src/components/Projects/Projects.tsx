import React, { useState, useEffect, useRef } from "react";
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
  SectionCheckBox,
  CheckBoxContainer,
  CheckBoxTitle,
  CheckBox,
  Label,
  EmptyContainer,
  EmptyImage,
  EmptyTitle,
  EmptyContent,
  EmptyList,
  EmptyButton,
  EmptySubtitle,
  EmptySubContent
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
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useLocalStorage from "../../hooks/useLocalStorage";

const Projects = () => {
  const { logEvent } = useTracking();
  const containerEl = useRef<HTMLDivElement>(null);
  const [ storedValue, setValue ] = useLocalStorage("animation__effect", true);
  const [ checked, setChecked ] = useState<boolean>(storedValue);
  const [ loading, setLoading ] = useState<boolean>(false);

  const options: IntersectionObserverInit = {
    rootMargin: "30px 0px",
    threshold: [0.5, 1],
  }

  const effect = (entries : IntersectionObserverEntry[]) => {
    entries.forEach((entry : IntersectionObserverEntry) => {
      const target = entry.target as HTMLDivElement;
      target.classList.add("animation");
      const targetImage = target.querySelector("img") as HTMLImageElement;
      if (!target || !targetImage) return;
      const ratio = entry.intersectionRatio;
      switch(true) {
        case ( ratio <= 1 && ratio > 0.55) :
          target.style.opacity = "1";
          target.style.transform = "scale(1.0)";
          !targetImage.src && (targetImage.src = targetImage.dataset.src || "");
          return;
        case ( ratio <= 0.55 && ratio >= 0.2 ):
          target.style.opacity = "0.5";
          target.style.transform = 'scale(0.96)';
          !targetImage.src && (targetImage.src = targetImage.dataset.src || "");
          return;
  
        case ( ratio < 0.2 ):
          target.style.opacity = "0.15";
          target.style.transform = 'scale(0.92)';
          return;
  
        default:
        return;
      }
    })
  }

  const isActive = useIntersectionObserver({refElement: containerEl, effect, options, isActivate: storedValue}) || false;

  const disableEffect = (containerEl: React.RefObject<HTMLDivElement>) => {
    const targets = containerEl.current?.querySelectorAll("img");
    targets?.forEach((image: HTMLImageElement) => image.src = image.dataset.src || "");   
  }

  useEffect(() => {
    (async () => {
      await delay(800);
      setLoading(false);
      if (!isActive) {
        disableEffect(containerEl);
      }
    })();
  }, [isActive])
  
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

  const CheckBoxTemplate = () => {
    const handleCheck = () => {
      setChecked(!checked)
      setLoading(true);
      setValue(!checked);
      logEvent({
        category: 'Project Component',
        action: `Animation Effect Button Active? ${!isActive ? "ON" : "OFF"}`,
        label: 'Special Label'
      })
    } 

    return (
      <SectionCheckBox>  
      <CheckBoxTitle>Animation Effect</CheckBoxTitle>
      <CheckBoxContainer>
        <CheckBox type="checkbox" id="switch" checked={checked} onChange={handleCheck}/>
        <Label htmlFor="switch" className="label__off">OFF</Label>
        <Label htmlFor="switch" className="label__on">ON</Label>
      </CheckBoxContainer>
    </SectionCheckBox>
    )
  }


  const Template = ({ id, image, title, description, tags, source, code }: ProjectType) => {

    const Card = () => (
      <BlogCard key={id} className="observe" >
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

    const EmptyCard = () => (
      <EmptyContainer key={id} >
        <EmptyImage />
        <EmptyTitle />
        <EmptyContent/>
        <EmptySubContent />
        <EmptySubtitle />
        <EmptyList>
          <EmptyButton />
          <EmptyButton />
        </EmptyList>
      </EmptyContainer>
    )

    return !loading ? <Card /> : <EmptyCard />;
  }

  return ( 
    <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <CheckBoxTemplate />
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
