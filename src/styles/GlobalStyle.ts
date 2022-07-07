import { createGlobalStyle, keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default createGlobalStyle`
  body,* {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1,h2,h3,h4,h5,p {
    color: ${({ theme }) => theme.colors.text}; 
  }

  button {
    color: ${({ theme }) => theme.colors.text};
  }

  &::selection {
    color: white;
    background: ${({ theme }) => theme.colors.primary};
  }

  &::-moz-selection {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
