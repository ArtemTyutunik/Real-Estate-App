import { ColorModeScript } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter as RouterProvider} from "react-router-dom";
import {Provider as StoreProvider}  from 'react-redux';

import store from "./store";
import App from './components/app'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <StoreProvider store={store}>
        <RouterProvider>
            <ColorModeScript />
            <App />
        </RouterProvider>
    </StoreProvider>
);

