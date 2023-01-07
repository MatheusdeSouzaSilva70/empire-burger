interface CommentProps {
  comment: string;
  avatar: string;
  name: string;
  age: number;
}

import { Container, ContainerAvatar, ContainerUser } from './styles';

export function Comment({ comment, avatar, name, age }: CommentProps) {
  return (
    <Container>
      <p>{comment}</p>
      <ContainerAvatar>
        <img src={avatar} alt="Foto de perfil" />
        <ContainerUser>
          <h4>{name}</h4>
          <span>{age} anos</span>
        </ContainerUser>
      </ContainerAvatar>
    </Container>
  );
}
