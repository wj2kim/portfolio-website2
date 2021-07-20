import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  TitleContainer,
  NavContainer,
  IconsContainer,
  NavLink,
  BackToHomeLink,
  SocialIcons,
  Title,
} from "./HeaderStyles";

const Header = () => {
  useEffect(
    () => console.log("can i", document.querySelector(".video-wrapper")),
    []
  );

  return (
    <Container>
      <TitleContainer>
        <Link href="/">
          <BackToHomeLink>
            <DiCssdeck size="4rem" /> <Title>Porfolio</Title>
          </BackToHomeLink>
        </Link>
      </TitleContainer>
      <NavContainer>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Tech</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </NavContainer>
      <IconsContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://tistory.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </IconsContainer>
    </Container>
  );
};

export default Header;
