import { Header } from './components/Header';
import { Search } from './components/Search';
import { CardsList } from './components/CardsList';

import { GlobalStyle, Container } from './global/styles';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <Search />
          <CardsList />
        </Container>
      </>
    </div>
  );
}

export default App;
