import { useEffect, useState } from 'react';

import { Button } from '../Button';
import { SecondSubtitle } from '../SecondSubtitle';
import { Box } from '../../assets/styles/global';

import bannerMenuMobile from '../../assets/images/banner-menu-mobile.png';
import bannerMenu from '../../assets/images/banner-menu.png';
import cardWomanEating from '../../assets/images/card-woman-eating.png';

import formattedCurrency from '../../utils/formattedCurrency';

import { Container, ContainerCombo, Wrapper, ContainerMenuBurgerTitle, ContainerMenuList, MenuList, Item, ItemTitle, ContainerTitleAttendance } from './styles';

interface MenuBurgerProps {
  ingredients: string;
  plate: string;
  price: number;
}

export function MenuBurger() {
  const [menu, setMenu] = useState<MenuBurgerProps[]>([]);

  useEffect(() => {
    fetch('https://api.brchallenges.com/api/empire-burger/menu')
      .then(async (response) => {
        const json = await response.json();
        setMenu(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <Container id="anchor-menu-burger">
      <Wrapper>
        <ContainerCombo>
          <picture>
            <source srcSet={bannerMenu} media="(min-width: 700px)" />
            <img className="banner" srcSet={bannerMenuMobile} alt="" />
          </picture>

          <ContainerMenuBurgerTitle>
            <SecondSubtitle
              title="Escolha o seu combo imperial, "
              subtitle="Peça agora!"
              description="Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre promoção!"
            />

            <Button
              title="Ver Cardápio Completo"
              width="LG"
              height="MD"
            />
          </ContainerMenuBurgerTitle>
        </ContainerCombo>

        <ContainerMenuList>
          <h3>Nossa Especialidade</h3>
          <MenuList>
            {menu.map((item, index) => (
              <Item key={index}>
                <ItemTitle>
                  <span>{item.plate}</span>
                  <strong>{formattedCurrency(item.price)}</strong>
                </ItemTitle>
                <p>{item.ingredients}</p>
              </Item>
            ))}
          </MenuList>
        </ContainerMenuList>
      </Wrapper>

      <Box id="anchor-attendance">
        <img className="card-banner" src={cardWomanEating} alt="Mulher comendo um lanche" />
        <ContainerTitleAttendance>
          <SecondSubtitle
            title="Atendimento "
            subtitle="Personalizado"
            description="Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal."
          />

          <Button
            title="Cardápio Imperial"
            width="MD"
            height="MD"
          />
        </ContainerTitleAttendance>
      </Box>
    </Container>
  );
}
