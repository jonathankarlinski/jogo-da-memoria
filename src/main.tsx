import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Provider from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
