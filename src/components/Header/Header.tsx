import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import FillTistory from "../../assets/icons/tistory.svg";
import { useTracking } from "../../contexts/trackers";
import { ClickMouseEvent } from  "../../types/commonType";

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
  const { logEvent } = useTracking();

  const handleClick = ( e : ClickMouseEvent) => {
    const target = e.target as SVGElement;
    const anchorTag = target.closest("a");
    if (anchorTag) {
      logEvent({
        category: 'Header Component',
        action: `clicked ${target.dataset.id} on the header`,
        label: 'Special Label'
      })
    }
  }

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
          <Link href="#skills">
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#blogs">
            <NavLink>Blogs</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </NavContainer>
      <IconsContainer>
        <SocialIcons href="https://github.com/wj2kim" target="_blank" onClick={handleClick}>
          <AiFillGithub data-id="github-icon"size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/pvvjk" target="_blank" onClick={handleClick}>
          <AiFillInstagram data-id="instagram-icon" size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dont-stay-hungry.tistory.com" target="_blank" >
          <FillTistory data-id="tistory-icon" size="3rem" onClick={handleClick} />
        </SocialIcons>
      </IconsContainer>
    </Container>
  );
};

export default Header;
