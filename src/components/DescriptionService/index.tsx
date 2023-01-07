import theme from '../../assets/styles/themes/default';

interface DescriptionServiceProps {
  title: string;
  description: string;
  alternativeDescription?: string;
  color?: 'primary' | 'secondary';
}

import { Container } from './styles';

export function DescriptionService({
  title,
  description,
  alternativeDescription,
  color = 'primary'
}: DescriptionServiceProps) {
  return (
    <Container
      color={color === 'secondary' ? '#fff' : theme.colors.brown[800]}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{alternativeDescription}</p>
    </Container>
  );
}
