import { MenuMobileProps } from '../MenuMobile';
import { Button } from '../Button';

import logo from '../../assets/images/logo.png';
import ifood from '../../assets/icons/ifood.svg';
import instagram from '../../assets/icons/instagram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

import { Navigation, LinkLogo, LinkList, ContainerSocialMedia } from './styles';

export function Menu({ open, setOpen }: MenuMobileProps) {
  const close = () => setOpen(false);

  return (
    <Navigation>
      <LinkLogo href="#">
        <img className="logo" src={logo} alt="Logo Empire Burger" />
      </LinkLogo>

      <LinkList open={open}>
        <li>
          <a href="#anchor-home" onClick={() => close()}>Home</a>
        </li>
        <li>
          <a href="#anchor-offer" onClick={() => close()}>Promoção</a>
        </li>
        <li>
          <a href="#anchor-menu-burger" onClick={() => close()}>Cardápio</a>
        </li>
        <li>
          <a href="#anchor-attendance" onClick={() => close()}>Atendimento</a>
        </li>
        <li>
          <a href="#anchor-contact" onClick={() => close()}>Contato</a>
        </li>

        <ContainerSocialMedia>
          <a href="">
            <img src={ifood} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </ContainerSocialMedia>

        <Button
          title="Contato"
          icon={whatsapp}
          bg="third"
          color="third"
        />
      </LinkList>
    </Navigation>
  );
}
