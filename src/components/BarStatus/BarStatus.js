import React, { useState } from "react";
import styles from "./BarStatus.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";

// Images
import info from "../../assets/images/info.svg";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/reports.svg";
import menuImage from "../../assets/images/icon-menu.svg";
import cloud from "../../assets/images/cloud.svg";

export default function BarStatus() {
    const [menu, setMenu] = useState(false);
    const [statusInfoActive, setStatusInfoActive] = useState(false);
    const [statusActiveModal, setStatusActiveModal] = useState(false);

    return (
        <div className={styles.bar}>
            <div className={styles.barNegative}></div>
            <div className={styles.barStable}></div>
            <div className={styles.barPositive}></div>

            <button onClick={() => {
                setStatusInfoActive(true);
                setStatusActiveModal(!statusActiveModal);
            }}>
                <img src={info} alt="Informações"/>
            </button>

            <div className={styles.accountMenuContainer}>
                <div className={styles.accountMenu}>
                    <div className={styles.accountMenuButton} onClick={() => setMenu(!menu)}>
                        {window.innerWidth > 1200 ? 
                            <p>Você, está aqui!</p>
                            :
                            <img src={menuImage} alt="Menu" />
                        }
                    </div>

                    <div className={`${styles.accountMenuLinks} ${menu && styles.accountMenuLinksActive}`}>
                        <div className={styles.downloadRegister}>
                            <img src={cloud} alt="Baixar Relatório" />
                            Baixar relatório
                        </div>
                        <Link to={"/reports"}>
                            <img src={registers} alt="Meus Relatórios" /> 
                            Meus Relatórios   
                        </Link>
                        <Link to={"/config"}>
                            <img src={config} alt="Configurações" />
                            Configurações
                        </Link>
                    </div>
                </div>
            </div>

            <ModalInfo 
                active={statusInfoActive} 
                activeModal={statusActiveModal} 
                title={"Status"}
            />
        </div>
    )
}
