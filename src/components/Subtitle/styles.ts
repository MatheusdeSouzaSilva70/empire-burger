import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.brown[900]};
    text-transform: uppercase;
    font-family: 'Lilita One';
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.brown[800]};
    line-height: 22px;
  }
`;
