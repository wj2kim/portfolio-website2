import React from "react";
import { AiFillGithub, AiOutlineCopyright } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SloganIcon,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="about">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:010-5660-6172">010-5660-6172</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:wj2kim@gmail.com">wj2kim@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <SloganIcon>
            <AiOutlineCopyright size="1.2rem" />
          </SloganIcon>
          <Slogan>PAUL WOOJUNG KIM 2021 - ALL RIGHTS RESERVED</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://tistory.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
