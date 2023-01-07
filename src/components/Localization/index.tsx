import { Subtitle } from '../Subtitle';

import { Container, ContainerMap } from './styles';

export function Localization() {
  return (
    <Container>
      <Subtitle
        title="Onde fica o nosso Castelo"
        description="Estaremos de portas abertas para a nossa realeza."
      />

      <ContainerMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467689.79713582917!2d-46.87548240955621!3d-23.682160405341218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1671032322319!5m2!1sen!2sbr" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </ContainerMap>
    </Container>
  );
}
