import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';
import { ContentMain } from './styles';
import { Home } from '../Home';
import { Offers } from '../Offers';
import { MenuBurger } from '../MenuBurger';
import { Comments } from '../Comments';
import { Delivery } from '../Delivery';
import { Localization } from '../Localization';
import { Footer } from '../Footer';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <ContentMain>
        <Home />
        <Offers />
        <MenuBurger />
        <Comments />
        <Delivery />
        <Localization />
      </ContentMain>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
