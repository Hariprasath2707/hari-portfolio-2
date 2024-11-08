import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/themeContext.jsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter basename="hari-portfolio-2">
  <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);