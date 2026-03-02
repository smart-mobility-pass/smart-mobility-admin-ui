import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import keycloak from './keycloak'

const root = createRoot(document.getElementById('root')!);

// Composant de chargement
function LoadingScreen() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Connexion en cours...</p>
      </div>
    </div>
  );
}

// Affiche l'écran de chargement pendant l'initialisation de Keycloak
root.render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>,
);

// Initialisation de Keycloak
keycloak.init({
  onLoad: 'login-required',
  checkLoginIframe: false,
  redirectUri: `${window.location.origin}/admin`,
  silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  pkceMethod: 'S256',
  enableLogging: true,
}).then((authenticated: boolean) => {
  if (authenticated) {
    console.log('User authenticated successfully');
    console.log('Token:', keycloak.token?.substring(0, 50) + '...');
    console.log('Realm Roles:', keycloak.realmAccess?.roles);
    console.log('Resource Access Roles:', keycloak.resourceAccess);
    console.log('Has Admin Role (Realm):', keycloak.hasRealmRole('admin'));

    root.render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>,
    );
  } else {
    console.warn('User is not authenticated, redirecting to login...');
    keycloak.login();
  }
}).catch((error) => {
  console.error('Keycloak initialization failed:', error);
  root.render(
    <div className="flex items-center justify-center w-full h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">Erreur d'authentification</h1>
        <p className="mt-2 text-red-500">Impossible de se connecter à Keycloak</p>
        <p className="mt-1 text-sm text-gray-600">Vérifiez que Keycloak est en cours d'exécution sur http://localhost:8080</p>
      </div>
    </div>
  );
});
