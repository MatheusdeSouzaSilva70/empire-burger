import theme from '../../assets/styles/themes/default';

interface SpecialOffersProps {
  image: string;
  title: string;
  description: string;
  placeholder: string;
  color?: 'primary' | 'secondary';
  color2?: 'primary' | 'secondary';
  subtitle?: string;
  day?: string;
}

import { Container, InfosOffer, InfosOfferDay } from './styles';

export function SpecialOffers({ image, title, description, placeholder, color = 'primary', color2 = 'primary', day, subtitle }: SpecialOffersProps) {
  return (
    <Container>
      <img src={image} alt={placeholder} />

      <InfosOffer
        color={color === 'secondary' ? 'rgba(255, 255, 255, 0.9)' : theme.colors.brown[900]}
        color2={color2 === 'secondary' ? 'rgba(255, 255, 255, 0.69)' : theme.colors.brown[800]}
      >
        <h3>{title}</h3>
        <span>{description}</span>
      </InfosOffer>

      <InfosOfferDay
        color={color === 'secondary' ? 'rgba(255, 255, 255, 0.9)' : theme.colors.brown[900]}
        color2={color2 === 'secondary' ? 'rgba(255, 255, 255, 0.69)' : theme.colors.brown[800]}
      >
        <span>{subtitle}</span>
        <h3>{day}</h3>
      </InfosOfferDay>
    </Container>
  );
}
