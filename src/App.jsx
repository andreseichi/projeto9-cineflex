import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Sessions } from './pages/Sessions';

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
      </Routes>
    </>
  );
}
