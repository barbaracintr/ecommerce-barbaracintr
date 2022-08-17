import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter';
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        background: #fff;
    }
`;

export const FlexContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${(props) => props.width || "100%"};
//   height: ${(props) => props.height || "100%"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  gap: ${(props) => props.gap || "10px"};
  padding: ${(props) => props.padding || "20px"};
`;
