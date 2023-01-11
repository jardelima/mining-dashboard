import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom"; 

// Images
import logo from "../../assets/images/logo.png";
import logoDesktop from "../../assets/images/logo-desktop.png";
import menuImage from "../../assets/images/icon-menu.svg";
import bell from "../../assets/images/bell.svg";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/registers.svg";
import reports from "../../assets/images/reports.svg";
import logout from "../../assets/images/logout.svg";
import changePlan from "../../assets/images/change-plan.svg";
import exit from "../../assets/images/exit.svg";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [notificationActive, setNotificationActive] = useState(true);
    const [messageActive, setMessageActive] = useState(true);

    const location = useLocation();
    const { pathname } = location;

    return (
        <>
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
                        <Link to={"/reports"} onClick={() => setMenu(false)}>
                            <img src={registers} alt="Meus Relatórios" />
                            Meus relatórios
                        </Link>
                        <Link to={"/configs"} onClick={() => setMenu(false)}>
                            <img src={config} alt="Configurações" />
                            Configurações
                        </Link>
                        <Link to={"/change-plan"} onClick={() => setMenu(false)}>
                            <img src={changePlan} alt="Alterar plano" /> 
                            alterar plano   
                        </Link>
                        <div className={styles.logout} onClick={() => setMenu(false)}>
                            <img src={logout} alt="Sair" />
                            Sair
                        </div>
                    </div>
                </div>


                <div className={styles.menuDesktop}>
                    <div className={styles.menuItems}>
                        <div className={styles.menuLogo}>
                            <Link to={"/"}>
                                <img src={logoDesktop} alt="Logo" />
                            </Link>
                        </div>

                        <div className={`${styles.menuItem} ${pathname === "/reports" && styles.menuItemActive}`}>
                            <Link to={"/reports"}>
                                <img src={reports} alt="Relatórios" />
                            </Link>

                            <div className={styles.menuHover}>
                                <p>Meus relátorios</p>
                            </div>
                        </div>

                        <div className={`${styles.menuItem} ${pathname === "/registers" && styles.menuItemActive}`}>
                            <Link to={"/registers"}>
                                <img src={registers} alt="Registros" />
                            </Link>

                            <div className={styles.menuHover}>
                                <p>Meus registros</p>
                            </div>
                        </div>

                        <div className={`${styles.menuItem} ${pathname === "/configs" && styles.menuItemActive}`}>
                            <Link to={"/configs"}>
                                <img src={config} alt="Configurações" />
                            </Link>

                            <div className={styles.menuHover}>
                                <p>Configurações</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={`${notificationActive && styles.notification}  ${styles.notificationDefault}`}>
                            <Link onClick={() => {
                                    setMessageActive(!messageActive);
                                }}
                            >
                                <img src={bell} alt="Notificações" />
                            </Link>

                            <div className={styles.menuHover}>
                                <p>Notificações</p>
                            </div>
                        </div>

                        <div className={styles.menuItem}>
                            <img src={logout} alt="Logout" />
                        </div>
                    </div>
                </div>
            </header>

            <div className={`${styles.notificationMessage} ${messageActive && styles.notificationMessageActive}`}>
                <h4>Seu relatório está pronto para visualização!</h4>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet ligula sit amet quam aliquam, vitae semper purus suscipit. 
                </p>

                <div className={styles.notificationButtons}>
                    <Link 
                        to={"/reports"} 
                        onClick={() => {
                            setMessageActive(false);
                            setNotificationActive(false);
                        }}
                    >
                        Ver relatório
                    </Link>

                    <button onClick={() => {
                        setMessageActive(false);
                        setNotificationActive(false);
                    }}>
                        Apagar
                    </button>
                </div>

                <button onClick={() => {
                    setMessageActive(false);
                }}>
                    <img src={exit} alt="Fechar notificação" />
                </button>
            </div>
        </>
    )
}
