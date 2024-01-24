import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MessageBoardProvider } from './context/MessageBoardContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MessageBoardProvider>
      <App />
    </MessageBoardProvider>
  </React.StrictMode>
);
