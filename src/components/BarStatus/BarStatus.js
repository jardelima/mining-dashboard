import React, { useState, useContext, useEffect } from "react";
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

    const [valueNegative, setValueNegative] = useState(0);
    const [valueStable, setValueStable] = useState(0);
    const [valuePositive, setValuePositive] = useState(0);

    useEffect(() => {
        setValueNegative((20 * 100) + "px");
        setValueStable((30 * 100) + "px");
        setValuePositive((50 * 100) + "px");
    });

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
        <div className={styles.bar} >
            <div className={styles.barNegative} style={{ width: valueNegative }}>
                { statusNumber < 30 && boxMenu()}
            </div>
            
            <div className={styles.barStable} style={{ width: valueStable }}>
                { statusNumber > 30 && statusNumber <= 79 && boxMenu()}
            </div>
            
            <div className={styles.barPositive} style={{ width: valuePositive }}>
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

            <Link to={"/nps"} />
        </div>
    )
}
