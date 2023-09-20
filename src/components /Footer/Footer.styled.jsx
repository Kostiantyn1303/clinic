import styled from "@emotion/styled";
import { Link } from "react-scroll";
export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 15px 0px;
`;

export const NavWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  gap: 20px;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const NavItem = styled.li``;

export const Logo = styled.h1`
  min-width: 120px;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StyledLink = styled(Link)({
  color: " #999999",
  fontFamily: "Montserrat",
  fontSize: "16px",

  fontWeight: "500",
  lineHeight: "normal",
  textDecoration: " none",

  "&:hover": {
    color: " #ff6600",
  },
});

export const LinkContacts = styled.a`
  color: #615e5e;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  &:hover {
    color: #ff6600;
  }
`;
