import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Sessions } from './pages/Sessions';
import { Seats } from './pages/Seats';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sessoes">
          <Route path=":idFilme" element={<Sessions />} />
        </Route>
        <Route path="assentos">
          <Route path=":idSessao" element={<Seats />} />
        </Route>
      </Routes>
    </>
  );
}
