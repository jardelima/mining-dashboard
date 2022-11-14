import React, { useState, useContext } from "react";
import styles from "./BarStatus.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";

// Images
import info from "../../assets/images/info.svg";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/reports.svg";
import menuImage from "../../assets/images/icon-menu.svg";
import cloud from "../../assets/images/cloud.svg";

// Context
import { User } from "../../context/User";

export default function BarStatus() {
    const { statusNumber } = useContext(User);

    const [menu, setMenu] = useState(false);
    const [statusInfoActive, setStatusInfoActive] = useState(false);
    const [statusActiveModal, setStatusActiveModal] = useState(false);

    function boxMenu() {
        return (
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
        )
    }

    return (
        <Link className={styles.bar} to={"/registers/nps"}>
            <div className={styles.barNegative}>
                { statusNumber < 30 && boxMenu()}
            </div>
            
            <div className={styles.barStable}>
                { statusNumber > 30 && statusNumber <= 79 && boxMenu()}
            </div>
            
            <div className={styles.barPositive}>
                { statusNumber >= 80 && boxMenu()}
            </div>

            <button onClick={() => {
                setStatusInfoActive(true);
                setStatusActiveModal(!statusActiveModal);
            }}>
                <img src={info} alt="Informações"/>
            </button>

            <ModalInfo 
                active={statusInfoActive} 
                activeModal={statusActiveModal} 
                title={"Status"}
            />
        </Link>
    )
}
