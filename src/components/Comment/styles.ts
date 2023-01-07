import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;

  padding-top: 17px;
  padding-left: 17px;
  padding-right: 24px;
  margin-top: 16px;

  max-height: 178px;
  max-width: 370px;

  p {
    color: ${({ theme }) => theme.colors.brown[800]};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 20px;
  padding-bottom: 15px;

  img {
    display: block;
    width: 48.5px;
    height: 48.5px;
    border-radius: 100%;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: 'Lilita One';
    font-size: 18px;
    color: ${({ theme }) => theme.colors.brown[900]};
    text-transform: uppercase;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.brown[800]};
  }
`;
