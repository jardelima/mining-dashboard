import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menuImage from "../../assets/images/icon-menu.png";

export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <header className={styles.mainHeader}>
            <div className={styles.menuMobile}>
                <h1 className={styles.menuMobileTitle}>
                    <Link to={"/"}>
                        <img src={logo} alt="Mining dashboard logo" />
                    </Link>
                </h1>

                <div className={styles.menuIcon} onClick={() => setMenu(!menu)}>
                    <img src={menuImage} alt="Menu" />
                </div>
            </div>

            <div className={`${styles.menuContentMobile} ${menu && styles.menuContentMobileActive}`}>
                <Link to={"/"}>Lorem Ipsum</Link>
                <Link to={"/"}>Lorem Ipsum</Link>
                <Link to={"/"}>Lorem Ipsum</Link>
            </div>


            <div className={styles.menuDesktop}>

            </div>
        </header>
    )
}
