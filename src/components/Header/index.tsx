import {
  useRef, useState,
} from 'react';

import { Menu } from '../Menu';
import { MenuMobile } from '../MenuMobile';

import { Container } from './styles';

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  return (
    <Container ref={node}>
      <Menu open={open} setOpen={setOpen} />
      <MenuMobile open={open} setOpen={setOpen} />
    </Container>
  );
}
