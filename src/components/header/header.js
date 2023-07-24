'use client'
import React from 'react';
import Link from 'next/link'
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
            <Link className={navbar__item} href={'/sale'}>
                Buy Property
            </Link>
            <Link className={navbar__item} href={'/rent'}>
                Rent Property
            </Link>
        </div>
    )
}

function Header() {
    return (
    <div className={header}>
        <div className={header_logo}>
            <Link href={'/home'}>Realtor</Link>
        </div>
        <NavBar/>
    </div>
    );
}

export default Header;