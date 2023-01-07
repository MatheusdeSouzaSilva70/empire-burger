import theme from '../../assets/styles/themes/default';

interface ButtonProps {
  title: string;
  icon?: string;
  bg?: 'primary' | 'secondary' | 'third';
  color?: 'primary' | 'secondary' | 'third';
  width?: 'SM' | 'MD' | 'LG';
  height?: 'SM' | 'MD' | 'LG';
}

import { Container } from './styles';

export function Button({
  title,
  icon,
  bg = 'primary',
  color = 'primary',
  width = 'SM',
  height = 'SM'
}: ButtonProps) {
  return (
    <Container
      type='button'
      bg={bg === 'third'
        ? theme.colors.yellow
        : bg === 'secondary'
          ? theme.colors.brown[100]
          : theme.colors.red[100]
      }
      color={color === 'third'
        ? theme.colors.brown[700]
        : color === 'secondary'
          ? theme.colors.red[100]
          : '#fff'
      }
      width={width === 'MD'
        ? theme.button_size.width.MD
        : width === 'LG'
          ? theme.button_size.width.LG
          : theme.button_size.width.SM
      }
      height={height === 'MD'
        ? theme.button_size.height.MD
        : height === 'LG'
          ? theme.button_size.height.LG
          : theme.button_size.height.SM
      }
    >
      {icon && <img src={icon} alt="" />}
      {title}
    </Container>
  );
}
