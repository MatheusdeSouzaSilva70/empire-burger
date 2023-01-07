import theme from '../../assets/styles/themes/default';

interface InfoIconProps {
  icon: string;
  placeholder: string;
  bg?: 'primary' | 'secondary';
}

import { Container } from './styles';

export function InfoIcon({
  icon,
  placeholder,
  bg = 'primary'
}: InfoIconProps) {
  return (
    <Container
      bg={bg === 'secondary' ? theme.colors.red[900] : theme.colors.brown[100]}
    >
      <img className="icon" src={icon} alt={placeholder} />
    </Container>
  );
}
