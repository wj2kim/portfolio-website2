import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Container, Text, DetailedContainer, DetailedText, DetailedTitle, StarIcon } from "./WelcomeStyle";
import { name, detailed } from "../../constants/constants";
import { welcomeAnimationSelector } from '../../recoil/atoms';
import { AiTwotoneStar } from "react-icons/ai";
import { useTracking } from "../../contexts/trackers";

const Welcome = () => {
  const [welcomeAnimation, setWelcomeAnimation] = useRecoilState(welcomeAnimationSelector);
  const { basicAnimation, detailedAnimation} = welcomeAnimation;
  const titleEl = useRef<HTMLHeadingElement>(null);
  const containerEl = useRef<HTMLDivElement>(null);
  const splitText: string[] = name.split("");
  const { logEvent } = useTracking();
  let char = 0;
  let timer: ReturnType<typeof setInterval>;

  const createTextMarkup = () => {
    return splitText.map((letter) => `<span>${letter}</span>`).join("");
  };

  const onTick = () => {
    const span = titleEl?.current?.querySelectorAll("span")[char];
    if (!span) return;
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return true;
    }
    return false;
  };

  const disableScrollOnBody = () => {
    document.body.classList.add("disable-scroll");
  };

  const enableScrollOnBody = () => {
    document.body.classList.remove("disable-scroll");
  };

  const step = () => {
    const isFinished = onTick();
    if (!isFinished) {
      window.requestAnimationFrame(step);
    }
  }

  const fadeIn = (element: React.RefObject<HTMLDivElement>) => {
    if (element.current === null) {
      return;
    }
    element.current.classList.remove("fadeOut");
    element.current.classList.add("fadeIn");
  }

  const fadeOut = (element: React.RefObject<HTMLDivElement>) => {
    if (element.current === null) {
      return;
    }
    element.current.classList.remove("fadeIn");
    element.current.classList.add("fadeOut");
  }

  const complete = () => {
    if (timer) {
      clearInterval(timer);
    }
    const ms = !detailedAnimation ? 1500 : 1000;
    setTimeout(() => {
      completeImmediately();
    }, ms);
  };

  const completeImmediately = () => {
    fadeOut(containerEl);
    enableScrollOnBody();
    setWelcomeAnimation({"detailedAnimation": true, "basicAnimation": true});
  }

  const handleContainerClick = () => {
    /** force complete */
    completeImmediately();
    logEvent({
      category: 'Welcome Component',
      action: 'clicked welcome animation',
      label: 'Special Label'
    });
  }

  const useAnimationEffect = () => {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(step);
    } else {
      timer = setInterval(onTick, 30);
    }
  }

  const withoutAnimationEffect = () => {
    complete();
  }

  useEffect(() => {
    if (basicAnimation && detailedAnimation) {
      return;
    }
    fadeIn(containerEl);
    if (!basicAnimation) {
      useAnimationEffect();
    } else {
      withoutAnimationEffect();
    }
    disableScrollOnBody();
  }, [detailedAnimation]);

  const template = {
    _basic: () => (
      <Text
        className="user__name"
        dangerouslySetInnerHTML={{ __html: createTextMarkup() }}
        ref={titleEl}
      ></Text>
    ),
    _detailed: () => (
      <>
        <StarIcon>
          <AiTwotoneStar size="2.4rem" />
        </StarIcon>
        <DetailedTitle>{detailed.koreanName}</DetailedTitle>
        <DetailedTitle>{detailed.englishName}</DetailedTitle>
        <DetailedContainer>
          <DetailedText>{detailed.location}<span className="red">{detailed.red}</span><span className="blue">{detailed.blue}</span></DetailedText>
          <DetailedText>{detailed.birthDay}</DetailedText>
        </DetailedContainer>
      </>
    )
  }

  return (
    <Container ref={containerEl} onClick={handleContainerClick}>
      { !detailedAnimation && <template._detailed /> }
      { !basicAnimation && <template._basic /> }
    </Container>
  )
};

export default Welcome;
