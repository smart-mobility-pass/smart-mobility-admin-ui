import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'smart-mobility',
    clientId: 'smart-mobility-app',
});

export default keycloak;
