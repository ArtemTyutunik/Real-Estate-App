import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import ForRentPage from "../pages/rentPage";
import styles from './header.module.css';

const {
    header_navbar,
    navbar__item,
    header,
    header_logo
} = styles

const NavBar = () => {
    return (
        <div className={header_navbar}>
            <RouterLink className={navbar__item} to={'/sale'}>
                Buy Property
            </RouterLink>
            <RouterLink className={navbar__item} to={'/rent'} element = {<ForRentPage/>}>
                Rent Property
            </RouterLink>
        </div>
    )
}

function Header() {
    return (
    <div className={header}>
        <div className={header_logo}>
            <RouterLink to={'/'}>Realtor</RouterLink>
        </div>
        <NavBar/>
    </div>
    );
}

export default Header;