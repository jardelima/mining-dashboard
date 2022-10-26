import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logoDesktop from "../../assets/images/logo-desktop.png";
import menuImage from "../../assets/images/icon-menu.png";
import bell from "../../assets/images/bell.png";
import config from "../../assets/images/config.png";
import registers from "../../assets/images/registers.png";
import reports from "../../assets/images/reports.png";
import logout from "../../assets/images/logout.png";
import changePlan from "../../assets/images/change-plan.png";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [notificationActive, setNotificationActive] = useState(true);

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
                <div className={styles.menuContentMobileLinks}>
                    <Link to={"/"}>
                        <img src={registers} alt="Meus Relatórios" />
                        Meus relatórios
                    </Link>
                    <Link to={"/"}>
                        <img src={config} alt="Configurações" />
                        Configurações
                    </Link>
                    <Link to={"/"}>
                        <img src={changePlan} alt="Alterar plano" /> 
                        alterar plano   
                    </Link>
                    <Link to={"/"}>
                        <img src={logout} alt="Sair" />
                        Sair
                    </Link>
                </div>
            </div>


            <div className={styles.menuDesktop}>
                <div className={styles.menuItems}>
                    <div className={styles.menuLogo}>
                        <Link to={"/"}>
                            <img src={logoDesktop} alt="Logo" />
                        </Link>
                    </div>

                    <div className={`${notificationActive && styles.notification}`}>
                        <Link to={"/notification"}>
                            <img src={bell} alt="Notificações" />
                        </Link>

                        <div className={styles.menuHover}>
                            <p>Notificações</p>
                        </div>
                    </div>

                    <div className={styles.menuItem}>
                        <Link to={"/reports"}>
                            <img src={reports} alt="Relatórios" />
                        </Link>

                        <div className={styles.menuHover}>
                            <p>Meus relátorios</p>
                        </div>
                    </div>

                    <div className={styles.menuItem} >
                        <Link to={"/registers"}>
                            <img src={registers} alt="Registros" />
                        </Link>

                        <div className={styles.menuHover}>
                            <p>Meus registros</p>
                        </div>
                    </div>

                    <div className={styles.menuItem}>
                        <Link to={"/config"}>
                            <img src={config} alt="Configurações" />
                        </Link>

                        <div className={styles.menuHover}>
                            <p>Configurações</p>
                        </div>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <img src={logout} alt="Logout" />
                </div>
            </div>
        </header>
    )
}
