import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  width: 100%;
  max-width: 466px;

  h3 {
    text-transform: uppercase;
    font-family: 'Lilita One';
    color: ${({ theme }) => theme.colors.brown[900]};
    opacity: 0.8;
  }

  p {
    color: ${(props) => props.color};
  }
`;
