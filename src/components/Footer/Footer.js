import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href={"mailto:swe.pratt@gmail.com"}>swe.pratt@gmail.com</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Contact me if you'd be interested to have me on your team. </Slogan>
            </CompanyContainer>
            <SocialContainer>
            <SocialIcons href={"https://github.com/PrattJames1"}>
                <AiFillGithub size={"3rem"} />
            </SocialIcons>
            <SocialIcons href={"https://www.linkedin.com/in/jamesprattcs/"}>
                <AiFillLinkedin size={"3rem"} />
            </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
