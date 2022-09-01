import React, {useEffect} from 'react';
import {ChakraProvider, Box, theme, Container, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react';
import Header from "../header";
import ForRentPage from "../pages/forRentPage";
import ForBuyPage from "../pages/forBuyPage";
import {getAllForRentProperties} from "../../service/service";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='1250px' >
        <Header/>
          <Tabs size='md' variant='enclosed'>
              <TabList key={'tab-list'}>
                  <Tab key={'for-rent-tab'}>For rent</Tab>
                  <Tab key={'for-sale-tab'}>For sale</Tab>
              </TabList>
              <TabPanels>
                  <TabPanel key={'for-rent-component'}>
                      <ForRentPage/>
                  </TabPanel>
                  <TabPanel key={'for-sale-component'}>
                     <ForBuyPage/>
                  </TabPanel>
              </TabPanels>
          </Tabs>
      </Container>
    </ChakraProvider>
  );
}

export default App;
