import styled from 'styled-components';

export const Container = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  align-items: center;

  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 3px;
  outline: none;

  background: ${({ theme }) => theme.colors.brown[200]};

  div {
    background: ${({ theme }) => theme.colors.brown[900]};
    width: 16px;
    height: 3px;
    border-radius: 3px;

    transition: all 0.4s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(50px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 1050px) {
    display: none;
  }
`;
