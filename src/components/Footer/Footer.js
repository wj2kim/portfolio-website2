import React from "react";
import { AiFillGithub, AiOutlineCopyright, AiFillInstagram } from "react-icons/ai";
import FillTistory from "../../assets/icons/tistory.svg";
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
          <SocialIcons href="https://github.com/wj2kim" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/pvvjk" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://dont-stay-hungry.tistory.com" target="_blank">
            <FillTistory size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
