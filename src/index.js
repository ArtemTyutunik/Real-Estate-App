import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/app'
import {BrowserRouter as RouterProvider} from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <RouterProvider>
    <ColorModeScript />
    <App />
  </RouterProvider>
);

