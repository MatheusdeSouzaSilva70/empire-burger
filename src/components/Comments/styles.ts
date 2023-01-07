import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 70px;

  width: 100%;

  .slick-slide {
    & > div {
      margin: 0 6px;
    }

    .slick-list .slick-track {
      border: 2px solid red;
      opacity: 0.6;
    }
  }

  .slick-dots {
    li {
      width: 87px;
      height: 6px;
      background: white;

      button::before {
        color: white;
        width: 100%;
        top: -7px;
      }
    }

    .slick-active {
      background: ${({ theme }) => theme.colors.yellow};

      button::before {
        color: ${({ theme }) => theme.colors.yellow};
        width: 100%;
      }
    }
  }
`;

export const ContainerCommentSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin-top: 64px;
`;

export const WrapperImagesMarquee = styled.div`
  margin-top: 16px;
  width: 100vw;
`;

export const WrapperImages = styled.div`
  display: flex;
  justify-content: center;

  overflow-x: hidden;

  background-color: #21201B;

  .images-instagram {
    display: block;
    max-width: 270px;
    width: 100%;
    max-height: 180px;

    &:first-child {
      mask-image: linear-gradient(to left, black -97.60%, transparent 118.38%);
    }

    &:last-child {
      mask-image: linear-gradient(to right, black -116.6%, transparent 87.38%);
    }

    @media only screen and (max-width: 430px) {
      &:nth-child(3) {
        mask-image: linear-gradient(to left, black -97.60%, transparent 118.38%);
      }

      &:nth-child(6) {
        mask-image: linear-gradient(to right, black -116.6%, transparent 87.38%);
      }
    }

    @media only screen and (max-width: 768px) {
      &:nth-child(2) {
        mask-image: linear-gradient(to left, black -97.60%, transparent 118.38%);
      }

      &:nth-child(7) {
        mask-image: linear-gradient(to right, black -116.6%, transparent 87.38%);
      }
    }
  }
`;

export const ContainerMarquee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 100%;

  background: ${({ theme }) => theme.colors.yellow};

  span {
    font-family: 'Lilita One';
    font-size: 28px;
    color: ${({ theme }) => theme.colors.brown[900]};
    text-transform: uppercase;
  }
`;
