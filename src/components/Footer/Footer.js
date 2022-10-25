import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import bell from "../../assets/images/bell.png";
import config from "../../assets/images/config.png";
import registers from "../../assets/images/registers.png";
import reports from "../../assets/images/reports.png";

export default function Footer() {
    const [notificationActive, setNotificationActive] = useState(true);

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
