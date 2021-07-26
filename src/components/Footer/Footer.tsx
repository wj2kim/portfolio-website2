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
  IconItem,
} from "./FooterStyles";
import { footerData } from "../../constants/constants";
import { welcomeAnimationSelector } from "../../recoil/atoms";
import { useRecoilState } from "recoil";

const Footer = () => {
  const [welcomeAnimation, setWelcomeAnimation] = useRecoilState(welcomeAnimationSelector);

  const handleClickImage = () => {
		setWelcomeAnimation({...welcomeAnimation, "detailedAnimation": false });
	}

  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:010-5660-6172">{footerData.phone}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:wj2kim@gmail.com">{footerData.email}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>About Me</LinkTitle>
          <IconItem size="2.5rem" style={{ marginLeft: "26px"}} onClick={handleClickImage}/>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <SloganIcon>
            <AiOutlineCopyright size="1.2rem" />
          </SloganIcon>
          <Slogan>{footerData.copyright}</Slogan>
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
