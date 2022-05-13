import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root'); 
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <Auth0Provider
          domain="wild-rice-9335.eu.auth0.com"
          clientId="ksJGSVS9aHEoMofivxzJePoBMgjoGuaY"
          redirectUri={`${window.location.origin}/authenticate`}
          useRefreshTokens={ true }
          cacheLocation='localstorage'
        >
        <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
