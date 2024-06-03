import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider,theme } from '@chakra-ui/react';

import { Auth0Provider } from '@auth0/auth0-react';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>

   <ChakraProvider theme={theme}>
   <ColorModeScript />
   <Auth0Provider
    domain="dev-81gc3cr1p1yoacyb.us.auth0.com"
    clientId="0AJxHDtUTdNNR4KCbZy1KrifD8WBtrx2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />

  </Auth0Provider>
   </ChakraProvider>
  </StrictMode>
);


