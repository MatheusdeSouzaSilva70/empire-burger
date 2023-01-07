import styled from 'styled-components';

export const Container = styled.button<{bg: string, width: string, height: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${(props) => props.bg};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  border-radius: 4px;

  color: ${(props) => props.color};
  font-weight: 700;

  &:hover {
    transition: all ease-in-out 0.5s;
    opacity: 0.7;
  }

  img {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
