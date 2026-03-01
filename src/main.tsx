import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import keycloak from './keycloak'

const root = createRoot(document.getElementById('root')!);

keycloak.init({ onLoad: 'login-required', checkLoginIframe: false }).then((authenticated: boolean) => {
  if (authenticated) {
    root.render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>,
    )
  }
}).catch(() => {
  console.error("Keycloak initialization failed");
});
