import styled from "styled-components";

export const Head = styled.header`
  background-image: linear-gradient(to right, #89ff, #ef32d9);
  border-radius: 0 0 30px 30px;
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
