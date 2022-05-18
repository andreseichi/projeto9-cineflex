import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Sessions } from './pages/Sessions';
import { Seats } from './pages/Seats';
import { Success } from './pages/Success';

import { GlobalStyle } from './styles/global';
import { useState } from 'react';

export function App() {
  const [order, setOrder] = useState({});

  function getOrder(parametro) {
    setOrder(parametro);
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sessoes">
          <Route path=":idFilme" element={<Sessions />} />
        </Route>
        <Route path="assentos">
          <Route
            path=":idSessao"
            element={<Seats order={order} getOrder={getOrder} />}
          />
        </Route>
        <Route path="/sucesso" element={<Success order={order} />} />
      </Routes>
    </>
  );
}
