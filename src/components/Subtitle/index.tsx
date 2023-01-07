interface SubtitleProps {
  title: string;
  description?: string;
}

import { Container } from './styles';

export function Subtitle({title, description }: SubtitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      {description === ''
        ? null
        : <p>{description}</p>
      }
    </Container>
  );
}
