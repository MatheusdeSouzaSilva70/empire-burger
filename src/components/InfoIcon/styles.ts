import styled from 'styled-components';

export const Container = styled.div<{bg: string}>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.bg};

  max-width: 60px;
  width: 100%;
  height: 60px;
  border-radius: 100%;

  .icon {
    width: 31px;
    height: 31px;
  }
`;
