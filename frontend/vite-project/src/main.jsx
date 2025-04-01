import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx'; // Correct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider> {/* Wrap App with AuthContextProvider */}
      <App />
    </AuthContextProvider>
  </StrictMode>,
);
