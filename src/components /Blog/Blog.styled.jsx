import styled from "@emotion/styled";
export const BlogContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
`;
export const BlogTitle = styled.h2`
  color: #000;

  font-size: 48px;

  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
  text-align: center;
`;
export const BlogList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  padding: 30px;
`;
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BlogItems = styled.li`
  display: flex;
  justify-content: flex-start;
`;
export const BlogText = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;
export const Link = styled.a`
  color: #060606;
  text-align: center;

  font-size: 24px;

  font-weight: 500;
  line-height: normal;
  &:hover {
    color: #ff6600;
  }
`;
