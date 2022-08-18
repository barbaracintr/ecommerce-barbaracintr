import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 0 auto;
  display: flex;
  aling-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 10px;
  width: 60%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    overflow: auto;
    width: 80vw;
  }
`;
