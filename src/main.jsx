import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/AppContextProvider';
import { BrowserRouter } from'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>

);
