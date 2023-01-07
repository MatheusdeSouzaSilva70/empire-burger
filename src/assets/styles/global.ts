import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  html::-webkit-scrollbar {
    width: 6px;
  }
  /* Track */
  html::-webkit-scrollbar-track {
    background: rgb(212, 212, 212);
  }

  /* Handle */
  html::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
    border-radius: 3px;
  }

  /* Handle on hover */
  html::-webkit-scrollbar-thumb:hover {
    background: rgb(110, 110, 110);
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    font-family: 'Lato', 'Lilita One', sans-serif, cursive;

    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.brown[700]};
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  padding-top: 72px;

  border-bottom: 1px solid rgba(29, 6, 5, 0.15);
  padding-bottom: 64px;

  .card-banner {
    display: block;
    width: 100%;
    max-width: 490px;
  }

  @media only screen and (min-width: 950px) {
    flex-direction: row;
    align-items: center;
  }
`;
