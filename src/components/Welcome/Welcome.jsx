import React, { useState, useEffect, useRef } from "react";
import { Container, Text } from "./WelcomeStyle";
import { name } from "../../constants/constants";

const Welcome = () => {
  const [visible, setVisible] = useState(true);
  const titleEl = useRef(null);
  const containerEl = useRef(null);
  const splitText = [...name];
  let char = 0;
  let timer = null;
  // let timer = setInterval(onTick, 50);

  const createTextMarkup = () => {
    return splitText.map((letter) => `<span>${letter}</span>`).join("");
  };

  const onTick = () => {
    const span = titleEl.current.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  };

  const complete = () => {
    clearInterval(timer);
    timer = null;
    setTimeout(() => containerEl.current.classList.add("fadeOut"), 1000);
  };

  useEffect(() => {
    timer = setInterval(onTick, 40);
  }, []);

  return (
    <Container ref={containerEl}>
      <Text
        className="user__name"
        dangerouslySetInnerHTML={{ __html: createTextMarkup() }}
        ref={titleEl}
        title=""
      ></Text>
    </Container>
  );
};

export default Welcome;
