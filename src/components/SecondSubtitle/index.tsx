import { Container } from './styles';

interface SecondSubtitleProps {
  title: string;
  subtitle: string;
  description: string;
}

export function SecondSubtitle({ title, subtitle, description }: SecondSubtitleProps) {
  return (
    <Container>
      <h2>{title}
        <strong>{subtitle}</strong>
      </h2>

      <p>{description}</p>
    </Container>
  );
}
