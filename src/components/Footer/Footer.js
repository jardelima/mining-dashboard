import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

// Images
import bell from "../../assets/images/bell.svg";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/registers.svg";
import reports from "../../assets/images/reports.svg";

export default function Footer() {
    const [notificationActive, setNotificationActive] = useState(false);

    useEffect(() => setNotificationActive(true), []);

    return (
        <div className={styles.footerWrapper}>
            <footer className={styles.footerContainer}>
                <div className={styles.footerItems}>
                    <div className={`${notificationActive && styles.notification}`}>
                        <Link to={"/notification"}>
                            <img src={bell} alt="Notificações" />
                        </Link>
                    </div>

                    <Link to={"/registers"}>
                        <img src={registers} alt="Registros" />
                    </Link>

                    <Link to={"/reports"}>
                        <img src={reports} alt="Relatórios" />
                    </Link>

                    <Link to={"/config"}>
                        <img src={config} alt="Configurações" />
                    </Link>
                </div>
            </footer>
        </div>
    )
}
