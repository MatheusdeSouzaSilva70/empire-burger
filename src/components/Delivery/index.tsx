import { Subtitle } from '../Subtitle';
import { DescriptionService } from '../DescriptionService';
import { InfoIcon } from '../InfoIcon';
import { Button } from '../Button';

import cardPhone from '../../assets/images/card-phone.png';

import whatsapp from '../../assets/icons/whatsapp.svg';
import delivery from '../../assets/icons/delivery.svg';
import iceCream from '../../assets/icons/ice-cream.svg';
import ifood from '../../assets/icons/ifood.svg';
import phone from '../../assets/icons/phone.svg';

import { Box } from '../../assets/styles/global';

import { Container, ContainerContactsDelivery, ContactDelivery, ContainerRequest, ContainerRequestNow } from './styles';

export function Delivery() {
  return (
    <Container id="anchor-contact">
      <Box className="delivery">
        <img className="card-banner" src={cardPhone} alt="Celular e Lanche Burger" />

        <ContainerContactsDelivery>
          <Subtitle
            title="Nossas Entregas"
          />

          <ContactDelivery>
            <InfoIcon
              icon={whatsapp}
              placeholder="Ícone whatsapp"
            />
            <DescriptionService
              title="WhatsApp"
              description="Vamos direto ao ponto, sem perder tempo!"
            />
          </ContactDelivery>

          <ContactDelivery>
            <InfoIcon
              icon={delivery}
              placeholder="Ícone moto de entrega"
            />
            <DescriptionService
              title="Entrega"
              description="Entregamos menos de 45 minutos na porta da sua casa!"
            />
          </ContactDelivery>

          <ContactDelivery>
            <InfoIcon
              icon={iceCream}
              placeholder="Ícone sorvete na taça"
            />
            <DescriptionService
              title="Sobremesa"
              description="Pedidos assima de 100 reais, ganham brindes."
            />
          </ContactDelivery>

          <ContactDelivery>
            <InfoIcon
              icon={ifood}
              placeholder="Ícone whatsapp"
            />
            <DescriptionService
              title="IFood"
              description="Nossa Loja é Top 1 da região!"
            />
          </ContactDelivery>
        </ContainerContactsDelivery>
      </Box>

      <ContainerRequest>
        <ContainerRequestNow>
          <InfoIcon
            icon={phone}
            placeholder="Ícone de telefone celular"
            bg="secondary"
          />
          <DescriptionService
            title="faça o seu pedido agora mesmo!"
            description="Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!"
            color="secondary"
          />
        </ContainerRequestNow>

        <Button
          title="Solicitar Pedido"
          width="LG"
          height="MD"
          bg="secondary"
          color="secondary"
        />
      </ContainerRequest>
    </Container>
  );
}
