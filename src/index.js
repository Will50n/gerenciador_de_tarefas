import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { TaskProvider } from './pages/Reducer';  // importar o provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <Home />
    </TaskProvider>
  </React.StrictMode>
);

reportWebVitals();
