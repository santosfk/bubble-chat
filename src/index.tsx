import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeSwitcherProvider } from './context/ThemeSwitcherContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);
