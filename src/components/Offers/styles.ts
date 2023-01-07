import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 70px;
`;

export const GridOffers = styled.div`
  display: grid;
  align-items: stretch;
  gap: 30px;

  margin-top: 16px;
  margin-bottom: 38px;

  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr;

    div:first-child {
      grid-row: 1/3;
    }
  }
`;

export const WrapperOpeningHoursSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;

  width: 100%;

  margin-bottom: 64px;

  @media only screen and (min-width: 772px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
  }
`;

export const OpeningHours = styled.section<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px 13px;
  width: 100%;

  border-radius: 10px;
  background: ${({ isOpen, theme }) => (isOpen ? '#438b35' : theme.colors.red[100])};

  div + div {
    padding-left: 14px;
    border-left: 1px solid rgba(29, 6, 5, 0.4);
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;

    div + div {
      padding-top: 14px;
      border-top: 1px solid rgba(29, 6, 5, 0.4);
      padding-left: 0;
      border-left: none;
    }
  }

  @media only screen and (min-width: 900px) {
    max-width: 570px;
  }
`;

export const HashtagSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hashtag-title {
    color: ${({ theme }) => theme.colors.brown[800]};
    font-size: 18px;
  }

  .hashtag-empireburger {
    font-family: 'Lilita One';
    color: ${({ theme }) => theme.colors.red[100]};
    font-size: 41px;
    text-transform: uppercase;
  }
`;
