import React from 'react';
import ReactDOM from 'react-dom/client';

// Import styles and components
import './index.css';
import App from './App';

// Import performance monitoring
import reportWebVitals from './reportWebVitals';

/**
 * Root element where the React application will be mounted
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the main App component within React's StrictMode
 * StrictMode helps identify potential problems in the application
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize performance monitoring
reportWebVitals();
