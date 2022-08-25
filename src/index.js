import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import PortfolioProvider from './utils/PortfolioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);