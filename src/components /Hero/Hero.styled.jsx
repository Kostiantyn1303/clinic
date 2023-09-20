import styled from "@emotion/styled";
import MyImage from "../../Images/hero.jpeg";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),
    url(${MyImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 40px;
`;
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 64px;

  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
`;
export const HeroList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
`;
export const HeroItemText = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;

  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  margin-bottom: 30px;
`;
export const HeroItem = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;

  font-weight: 500;
  line-height: normal;
  text-decoration: none;
`;
