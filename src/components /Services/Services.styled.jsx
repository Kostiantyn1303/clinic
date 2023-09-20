import styled from "@emotion/styled";
import ImageCard from "../../Images/room.webp";
import ImageCard2 from "../../Images/room2.jpeg";
import ImageCard3 from "../../Images/room3.jpg";

export const Title = styled.h2`
  color: #000;

  font-size: 48px;

  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;
export const Item = styled.li`
  padding: 15px;
  width: 470px;
  height: 460px;
  color: #fff;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.09);
  transition: transform 0.3s ease;
  text-align: center;

  font-size: 18px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${ImageCard2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  font-weight: 500;
  line-height: normal;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Span = styled.span`
  color: #ff6600;

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;
export const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
`;
export const Item1 = styled.li`
  padding: 15px;
  width: 470px;
  height: 460px;
  color: #fff;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.09);

  text-align: center;

  font-size: 18px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${ImageCard});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  font-weight: 500;
  line-height: normal;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Item2 = styled.li`
  padding: 15px;
  width: 470px;
  height: 460px;
  color: #fff;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.09);

  text-align: center;

  font-size: 18px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${ImageCard3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  font-weight: 500;
  line-height: normal;
  &:hover {
    transform: scale(1.1);
  }
`;
