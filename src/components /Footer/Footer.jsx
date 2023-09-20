import React from "react";
import sprite from "../../Images/icons.svg";
import LogoImg from "../../Images/GE-1.png";
import {
  NavItem,
  NavList,
  NavWrap,
  Logo,
  StyledLink,
  LinkContacts,
  Container,
} from "./Footer.styled";
function Footer() {
  return (
    <Container>
      <NavWrap>
        <Logo>
          <p>MindCare New Zealand</p>
          <img src={LogoImg} alt="logo" />
        </Logo>
        <NavList>
          <NavItem>
            <StyledLink to="hero" smooth={true} duration={500}>
              About us
            </StyledLink>
          </NavItem>

          <NavItem>
            <StyledLink href="">Services</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="">Our specialists</StyledLink>
          </NavItem>
        </NavList>
        <NavList>
          <NavItem>
            <StyledLink href="">Blog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="">Reviews</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="">Contacts </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="">Privacy Policy </StyledLink>
          </NavItem>
        </NavList>

        <NavList>
          <NavItem>
            {" "}
            <LinkContacts
              href="mailto:info@devstudio.com"
              class="site-nav__contacts-link"
            >
              <svg stroke="gray" width="16" height="16">
                <use href={sprite + "#icon-email-black"} />
              </svg>
              info@devstudio.com
            </LinkContacts>
          </NavItem>
          <NavItem>
            <LinkContacts
              href="tel:+380961111111"
              class="site-nav__contacts-link"
            >
              <svg stroke="gray" width="16" height="16">
                <use href={sprite + "#icon-phone-black"} />
              </svg>
              +38 096 111 11 11
            </LinkContacts>
          </NavItem>
        </NavList>
      </NavWrap>
    </Container>
  );
}

export default Footer;
