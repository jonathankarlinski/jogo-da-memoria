import { Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';
import NotFound from './pages/404';

function App() {
  return (
    <Routes>
      <Route path="/game" Component={Game} />
      <Route
        path="/"
        Component={Login}
      />
      <Route path="*" Component={NotFound} />
    </Routes>

  );
}

export default App;
