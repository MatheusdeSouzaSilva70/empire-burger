import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100vw;

  @media only screen and (min-width: 980px) {
    max-height: 575px;
    flex-wrap: nowrap;
  }
`;

export const ContainerCombo = styled.div`
  position: relative;
  width: 100%;

  .banner {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;

    @media only screen and (min-width: 700px) {
      height: 100%;
    }
  }
`;

export const ContainerMenuBurgerTitle = styled.div`
  position: absolute;
  top: 40px;
  left: 24px;

  max-width: 300px;
  width: 100%;

  div + button {
    margin-top: 16px;
  }

  @media only screen and (min-width: 700px) {
    left: 40%;
    top: 30%;
  }
`;

export const ContainerMenuList = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors.brown[500]};
  padding: 0 24px;
  padding-bottom: 50px;

  h3 {
    font-family: 'Lilita One';
    font-size: 25px;
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: uppercase;
    padding-top: 55px;
  }
`;

export const MenuList = styled.div`
  margin-top: 24px;

  div + div {
    margin-top: 16px;
  }
`;

export const Item = styled.div`
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 4px;
  }
`;

export const ItemTitle = styled.div`
  font-family: 'Lilita One';
  font-size: 20px;
  color: ${({ theme }) => theme.colors.brown[100]};
  text-transform: uppercase;

  display: flex;
  gap: 3px;

  span {
    display: flex;
    flex: 1;
    height: 20px;
    gap: 3px;

    &::after {
      content: '';
      border-bottom: 3px dotted #FAE4D0;
      flex: 1;
    }
  }

  strong {
    display: block;
    text-align: right;
  }
`;

export const ContainerTitleAttendance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  width: 100%;
  max-width: 350px;
`;
