import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    text-transform: uppercase;
    font-family: 'Lilita One';
    font-size: 25px;
    color: ${({ theme }) => theme.colors.brown[500]};

    strong {
      background: ${({ theme }) => theme.colors.yellow};
      border-radius: 5px;
      padding: 2px 4px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.brown[800]};
    font-size: 14px;
    margin: 8px 0;
  }
`;
