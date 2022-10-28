import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

// Images
import bell from "../../assets/images/bell.svg";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/registers.svg";
import reports from "../../assets/images/reports.svg";
import exit from "../../assets/images/exit.svg";

export default function Footer() {
    const [notificationActive, setNotificationActive] = useState(true);
    const [messageActive, setMessageActive] = useState(true);

    return (
        <div className={styles.footerWrapper}>
            <footer className={styles.footerContainer}>
                <div className={styles.footerItems}>
                    <div className={`${notificationActive && styles.notification} ${messageActive && styles.notificationDefault}`}>
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

                    <Link to={"/configs"}>
                        <img src={config} alt="Configurações" />
                    </Link>
                </div>

                <div className={`${styles.notificationMessage} ${messageActive && styles.notificationMessageActive}`}>
                    <h4>Seu relatório está pronto para visualização!</h4>
        
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet ligula sit amet quam aliquam, vitae semper purus suscipit. 
                    </p>
        
                    <div className={styles.notificationButtons}>
                        <Link 
                            to={"/"} 
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
            </footer>
        </div>
    )
}
