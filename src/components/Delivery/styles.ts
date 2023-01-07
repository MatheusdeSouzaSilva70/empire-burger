import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .delivery {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ContainerContactsDelivery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  width: 100%;
`;

export const ContactDelivery = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px 13px;
  width: 100%;

  border-radius: 10px;
  background: #fff;

  div + div {
    padding-left: 14px;
    border-left: 1px solid rgba(29, 6, 5, 0.4);
  }

  &:hover {
    box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
    transition: all ease-in-out 0.5s;
  }
`;

export const ContainerRequest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 20px 25px;
  margin-top: 64px;
  width: 100%;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.red[100]};

  button {
    margin-top: 8px;
    text-transform: uppercase;

    @media only screen and (max-width: 700px) {
      width: 100%;
    }
  }

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerRequestNow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  text-align: center;

  div + div {
    padding-top: 8px;
    border-top: 1px solid rgba(29, 6, 5, 0.4);
  }

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    gap: 15px;
    text-align: left;

    div + div {
      padding-top: 0;
      border-top: none;
      padding-left: 15px;
      border-left: 1px solid rgba(29, 6, 5, 0.4);
    }
  }
`;
