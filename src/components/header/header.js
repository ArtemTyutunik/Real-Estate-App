import React from 'react';
import {Box,Flex,HStack} from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom'
import ForRentPage from "../pages/forRentPage";

const NavBar = () => {
    return (
        <HStack spacing={'15px'}>
            <RouterLink to={'/search'}>
                Search
            </RouterLink>
            <RouterLink to={'/sale'}>
                Buy Property
            </RouterLink>
            <RouterLink to={'/rent'} element = {<ForRentPage/>}>
                Rent Property
            </RouterLink>
        </HStack>
    )
}

function Header() {
    return (
    <Flex w={'100%'} justifyContent = {'space-between'}>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <RouterLink to={'/'}>Realtor</RouterLink>
        </Box>
        <NavBar/>
    </Flex>
    );
}

export default Header;