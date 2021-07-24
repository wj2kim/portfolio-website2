import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Container, Text, DetailedContainer, DetailedText, DetailedTitle, StarIcon } from "./WelcomeStyle";
import { name } from "../../constants/constants";
import { welcomeAnimationSelector } from '../../recoil/atoms';
import { AiTwotoneStar } from "react-icons/ai";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Welcome = () => {
  const [welcomeAnimation, setWelcomeAnimation] = useRecoilState(welcomeAnimationSelector);
  const { basicAnimation, detailedAnimation} = welcomeAnimation;
  console.log("basicAnimation", basicAnimation, "detaildAnimation", detailedAnimation);
  const titleEl = useRef(null);
  const containerEl = useRef(null);
  const splitText = [...name];
  let char = 0;
  let timer = null;

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

  const fadeIn = (element) => {
    element.current.classList.remove("fadeOut");
    element.current.classList.add("fadeIn");
  }

  const fadeOut = (element) => {
    element.current.classList.remove("fadeIn");
    element.current.classList.add("fadeOut");
  }

  const complete = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
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
    // force complete;
    completeImmediately();
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


  const BasicTemplate = () => (
    <Text
      className="user__name"
      dangerouslySetInnerHTML={{ __html: createTextMarkup() }}
      ref={titleEl}
    ></Text>
  )

  const DetailedTemplate = () => (
    <>
      <StarIcon>
        <AiTwotoneStar size="3rem" />
      </StarIcon>
      <DetailedTitle>김우정</DetailedTitle>
      <DetailedTitle>Paul WooJung Kim</DetailedTitle>
      <DetailedContainer>
        <DetailedText>Lives in Seoul, <span className="blue">South</span> <span className="red">Korea</span></DetailedText>
        <DetailedText>Born in 1991 / 01 / 12</DetailedText>
      </DetailedContainer>
    </>
  )

  return (
    <Container ref={containerEl} onClick={handleContainerClick}>
      { !detailedAnimation && DetailedTemplate() }
      { !basicAnimation && BasicTemplate() }
    </Container>
  )
};

export default Welcome;
