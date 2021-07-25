import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import FillTistory from "../../assets/icons/tistory.svg";

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
  return (
    <Container>
      <TitleContainer>
        <Link href="/">
          <BackToHomeLink >
            <DiCssdeck size="5rem" /> <Title>Paul's Porfolio</Title>
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
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#blogs">
            <NavLink>Blogs</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </NavContainer>
      <IconsContainer>
        <SocialIcons href="https://github.com/wj2kim" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/pvvjk" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dont-stay-hungry.tistory.com" target="_blank">
          <FillTistory size="3rem" />
        </SocialIcons>
      </IconsContainer>
    </Container>
  );
};

export default Header;
