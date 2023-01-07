import { Container } from './styles';

export interface MenuMobileProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export function MenuMobile({ open, setOpen }: MenuMobileProps) {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  );
}
