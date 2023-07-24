'use client'
import React from 'react';
import {Provider as StoreProvider} from "react-redux/es/exports";
import store from "../../store";
import {ChakraProvider, ColorModeScript, Container, theme} from "@chakra-ui/react";
import Header from "../header";

const AppProviders = ({children}) => {
    return (
        <StoreProvider store={store}>
            <ColorModeScript />
                <ChakraProvider theme={theme}>
                    <Container maxW='1250px' >
                        <Header/>
                        {children}
                    </Container>
                </ChakraProvider>
        </StoreProvider>
    );
};

export default AppProviders;
