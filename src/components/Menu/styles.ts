import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (min-width: 1050px) {
    max-width: 1200px;
  }
`;

export const LinkLogo = styled.a`
  img {
    display: block;
    max-width: 235px;
  }
`;

export const LinkList = styled.ul<{open: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background: ${({ theme }) => theme.colors.brown[100]};

  transition: transform 0.9s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.2rem;

      &:hover {
        font-weight: 700;
        color: #000;
        transform: all ease 0.9s;
      }
    }
  }

  @media (min-width: 1050px) {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;

    height: 100%;
    width: 100%;

    background: none;

    transition: none;
    transform: none;

    li {
      a {
        text-transform: none;
        font-weight: 400;
        letter-spacing: normal;
      }
    }
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  a {
    &:hover {
      transform: scale(1) translateY(-5px);
      transition: all ease-in 0.5s;
      opacity: 0.7;
    }
  }

  @media (min-width: 1050px) {
    margin-left: 84px;
    margin-bottom: 0;
    border-right: 2px solid #B50B04;

    a:last-child {
      margin-right: 14px;
    }

    a {
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
`;
