import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { Container, Text } from "./WelcomeStyle";
import { name } from "../../constants/constants";
// import { nameBannerShownState } from '../../recoil/atoms';
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Welcome = () => {
  // const [ isNameBannerShown, setNameBanner] = useLocalStorage("isNameBannerShown");
  // console.log("isNameBannerShown", isNameBannerShown);
  // const tester = useRecoilValue(nameBannerShownState)
  // console.log("tester", tester);
  // const [visible, setVisible] = useState(true);
  const titleEl = useRef(null);
  const containerEl = useRef(null);
  const splitText = [...name];
  let char = 0;
  let timer = null;

  const createTextMarkup = () => {
    return splitText.map((letter) => `<span>${letter}</span>`).join("");
  };

  const onTick = () => {
    const span = titleEl.current.querySelectorAll("span")[char];
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

  const complete = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    setTimeout(() => {
      containerEl.current.classList.add("fadeOut");
      enableScrollOnBody();
      // setNameBanner(true);
      // nameBannerShownState(true);
    }, 1000);
  };

  useEffect(() => {
    // if (isNameBannerShown) {
    //   return;
    // }
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(step);
    } else {
      timer = setInterval(onTick, 30);
    }
    disableScrollOnBody();
  }, []);

  return (
    <Container ref={containerEl}>
      <Text
        className="user__name"
        dangerouslySetInnerHTML={{ __html: createTextMarkup() }}
        ref={titleEl}
      ></Text>
    </Container>
  )
};

export default Welcome;
