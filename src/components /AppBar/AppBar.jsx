import {
  NavItem,
  NavList,
  NavWrap,
  Logo,
  Header,
  StyledLink,
  LinkContacts,
} from "./AppBar.styled";
import sprite from "../../Images/icons.svg";
import LogoImg from "../../Images/GE-1.png";
const AppBar = () => {
  return (
    <>
      <Header>
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
              <StyledLink to="services" smooth={true} duration={500}>
                Services
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="team" smooth={true} duration={500}>
                Our specialists
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="blog" smooth={true} duration={500}>
                Blog
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="reviews" smooth={true} duration={500}>
                Reviews
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="contacts" smooth={true} duration={500}>
                Contacts{" "}
              </StyledLink>
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
      </Header>
    </>
  );
};
export default AppBar;
