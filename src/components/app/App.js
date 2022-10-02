import React from 'react';
import {ChakraProvider, theme, Container} from '@chakra-ui/react';

import Header from "../header";
import Routers from "../routes/routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='1250px' >
        <Header/>
        <Routers/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
