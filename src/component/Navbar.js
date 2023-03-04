import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Navbar.module.css"
import logo from "../images/logo.jpeg"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about Us">About Us</Link></li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>

            
        </header>
    );
};

export default Navbar;