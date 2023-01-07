import oferta1 from '../../assets/offers/oferta-1.png';
import oferta2 from '../../assets/offers/oferta-2.png';
import oferta3 from '../../assets/offers/oferta-3.png';

import timer from '../../assets/icons/timer.svg';

import { SpecialOffers } from '../SpecialOffers';
import { Subtitle } from '../Subtitle';
import { InfoIcon } from '../InfoIcon';
import { DescriptionService } from '../DescriptionService';

import { Container, GridOffers, HashtagSocialMedia, WrapperOpeningHoursSocialMedia, OpeningHours } from './styles';
import { useEffect, useState } from 'react';

export function Offers() {
  const [timeIsOpen, setTimeIsOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    if (day >= 1 && day <= 5) {
      if (hour >= 17 && hour <= 22) {
        setTimeIsOpen(true);
        console.log('primeiro');
      }
    }

    if (day === 0 || day === 6) {
      if (hour === 18) {
        if (minutes >= 30) {
          setTimeIsOpen(true);
          console.log('segundo');
        }
      }

      if (hour <= 22) {
        setTimeIsOpen(true);
        console.log('terceiro');
      }
    }
  }, [timeIsOpen]);

  // useEffect(() => {
  //   function changeHourWithBrowser() {
  //     const date = new Date();
  //     const day = date.getDay();
  //     const hour = date.getHours();
  //     const minutes = date.getMinutes();

  //     if (day >= 1 && day <= 5) {
  //       if (hour >= 17 && hour <= 22) {
  //         setTimeIsOpen(true);
  //         console.log('primeiro');
  //       }
  //     }

  //     if (day === 0 || day === 6) {
  //       if (hour === 18) {
  //         if (minutes >= 30) {
  //           setTimeIsOpen(true);
  //           console.log('segundo');
  //         }
  //       }

  //       if (hour <= 22) {
  //         setTimeIsOpen(true);
  //         console.log('terceiro');
  //       }
  //     }
  //   }

  //   changeHourWithBrowser();
  // }, [timeIsOpen]);

  return (
    <Container id="anchor-offer">
      <Subtitle
        title="Ofertas Especiais"
        description="Aproveite todas as nossas ofertas, fiquei de olho porque sempre estamos mudando o nosso cardapio."
      />

      <GridOffers>
        <SpecialOffers
          title="Burger Prime+Batata"
          description="250kg"
          subtitle="Apenas"
          placeholder="Lanche cortado com batatas fritas"
          color="secondary"
          color2="secondary"
          day="Hoje"
          image={oferta1}
        />
        <SpecialOffers
          title="Batata"
          description="150kg"
          placeholder="Cestinha com batatas fritas"
          image={oferta2}
        />
        <SpecialOffers
          title="Sorvete"
          description="50kg"
          placeholder="Cestinha de casquinha com sorvete"
          image={oferta3}
        />
      </GridOffers>

      <WrapperOpeningHoursSocialMedia>
        <OpeningHours isOpen={timeIsOpen}>
          <InfoIcon
            icon={timer}
            placeholder="Ícone de um relógio"
            bg='secondary'
          />
          <DescriptionService
            title="Horário de funcionamento"
            description="Segunda a sexta: 17h00 - 23h00"
            alternativeDescription="Sábado e Domingo: 18h30 - 23h00"
            color="secondary"
          />
        </OpeningHours>

        <HashtagSocialMedia>
          <p className="hashtag-title">Não esqueça de marcar a gente no Instagram:</p>
          <span className="hashtag-empireburger">#empireburger</span>
        </HashtagSocialMedia>
      </WrapperOpeningHoursSocialMedia>
    </Container>
  );
}
