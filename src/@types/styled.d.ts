import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      brown: {
        900: string;
        800: string;
        700: string;
        500: string;
        300: string;
        200: string;
        100: string;
      },
      red: {
        900: string;
        100: string;
      },
      yellow: string;
    },

    button_size: {
      width: {
        SM: string;
        MD: string;
        LG: string;
      },
      height: {
        SM: string;
        MD: string;
        LG: string;
      }
    }
  }
}
