import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-width: 1085px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding-bottom: 14px;
  border-bottom: 1px solid rgba(29, 6, 5, 0.15);

  @media only screen and (min-width: 1050px) {
    flex-direction: row;
  }
`;

export const NavigationListFooter = styled.nav`
  width: 100%;

  .social-media-footer {
    border-right: none;

    border-top: 1px solid rgba(29, 6, 5, 0.15);
    border-bottom: 1px solid rgba(29, 6, 5, 0.15);

    margin-top: 14px;
    margin-bottom: 14px;

    padding-top: 14px;
    padding-bottom: 14px;

    a {
      img {
        filter: invert(74%) sepia(57%) saturate(2396%) hue-rotate(343deg) brightness(95%) contrast(102%);
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;

    li {
      a {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.brown[500]};

        &:hover {
          font-weight: 700;
          color: #000;
          transform: all ease 0.9s;
        }
      }
    }
  }

  @media only screen and (min-width: 1050px) {
    display: flex;
    flex-direction: row-reverse;

    .social-media-footer {
      border-top: none;
      border-bottom: none;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  margin-top: 16px;
  margin-bottom: 20px;

  span {
    font-size: 14px;
    color: rgba(2, 14, 31, 0.30);
  }

  span:first-child {
    color: rgba(2, 14, 31, 0.69);
  }
`;
