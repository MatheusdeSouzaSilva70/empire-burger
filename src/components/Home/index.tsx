import { Button } from '../Button';

import bannerHeroMobile from '../../assets/images/banner-hero-mobile.png';
import bannerHero from '../../assets/images/banner-hero.png';
import burger from '../../assets/icons/burger.svg';
import headset from '../../assets/icons/headset.svg';
import delivery from '../../assets/icons/delivery.svg';

import { InfoIcon } from '../InfoIcon';
import { DescriptionService } from '../DescriptionService';

import { Container, ContainerService, MainTitle, ContainerServices, ContainerTitle } from './styles';

export function Home() {
  return (
    <Container id="anchor-home">
      <picture>
        <source srcSet={bannerHero} media="(min-width: 700px)" />
        <img className="banner" srcSet={bannerHeroMobile} alt="" />
      </picture>

      <ContainerTitle>
        <MainTitle>
          <span>Uma nova experiência!</span>
          <h1>
            King <strong>Burger</strong>
          </h1>
          <h3>
            Para quem tem um <strong>Apetite de um REI!</strong>
          </h3>
        </MainTitle>

        <Button
          title="Comprar Agora"
          width="MD"
          height='MD'
        />
      </ContainerTitle>

      <ContainerServices>
        <ContainerService>
          <InfoIcon
            icon={burger}
            placeholder="Ícone lanche hambuguer"
          />
          <DescriptionService
            title="Artesanal"
            description="Nossas receitas são feitas com todo cuidado"
          />
        </ContainerService>

        <ContainerService>
          <InfoIcon
            icon={headset}
            placeholder="Ícone de um headset"
          />
          <DescriptionService
            title="Atendimento"
            description="Totalmente personalizado"
          />
        </ContainerService>

        <ContainerService>
          <InfoIcon
            icon={delivery}
            placeholder="Ícone de uma moto de entregas delivery"
          />
          <DescriptionService
            title="Delivery Speed"
            description="Entregamos menos de 30 minutos"
          />
        </ContainerService>
      </ContainerServices>
    </Container>
  );
}
