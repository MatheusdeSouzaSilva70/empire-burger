import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .banner {
    display: block;
    width: 100vw;
    object-fit: cover;
    height: auto;

    @media only screen and (min-width: 700px) {
      height: 525px;
    }

    @media only screen and (min-width: 1770px) {
      height: 600px;
    }

    @media only screen and (min-width: 2200px) {
      height: 660px;
    }

    @media only screen and (min-width: 2500px) {
      height: 700px;
    }
  }
`;

export const ContainerTitle = styled.div`
  position: absolute;
  top: 60px;

  width: 100%;

  @media only screen and (min-width: 425px) {
    top: 90px;
  }

  @media only screen and (min-width: 900px) {
    top: 120px;
  }

  @media only screen and (min-width: 1770px) {
    top: 180px;
  }
`;

export const MainTitle = styled.div`
  span {
    color: ${({ theme }) => theme.colors.brown[900]};
    font-weight: 700;
    line-height: 25px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.brown[500]};
    font-family: 'Lilita One';
    font-size: 54px;
    text-transform: uppercase;

    strong {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  h3 {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    font-weight: 400;
    color: ${({ theme }) => theme.colors.brown[300]};
    margin-bottom: 16px;

    strong {
      background: ${({ theme }) => theme.colors.yellow};
      border-radius: 5px;
      padding: 2px;
      color: ${({ theme }) => theme.colors.brown[800]};
    }
  }
`;

export const ContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  position: relative;
  top: -100px;

  width: 100%;

  padding: 26px 32px;

  background: #fff;
  box-shadow: 0px 4px 35px rgba(179, 155, 132, 0.3);
  border-radius: 10px;

  & > div {
    border-bottom: 1px solid rgba(73, 46, 21, 0.15);
    padding-bottom: 16px;
  }

  & :last-child {
    border: none;
    padding-bottom: 0;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    top: -64px;

    & > div {
      border-right: 1px solid rgba(73, 46, 21, 0.15);
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export const ContainerService = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  width: 100%;
`;
