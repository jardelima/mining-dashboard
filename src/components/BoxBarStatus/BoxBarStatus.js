import React, { useState, useEffect } from "react";
import styles from "./BoxBarStatus.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";

// Images
import info from "../../assets/images/info.svg";
import exit from "../../assets/images/exit.svg";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/reports.svg";
import menuImage from "../../assets/images/icon-menu.svg";
import cloud from "../../assets/images/cloud.svg";

export default function BoxBarStatus() {
    const [status, setStatus] = useState(59);
    const [statusInfoActive, setStatusInfoActive] = useState(false);
    const [statusActiveModal, setStatusActiveModal] = useState(false);
    const [menu, setMenu] = useState(false);

    const [valueNegative, setValueNegative] = useState(0);
    const [valueStable, setValueStable] = useState(0);
    const [valuePositive, setValuePositive] = useState(0);

    useEffect(() => {
        setValueNegative(10 * 100);
        setValueStable(30 * 100);
        setValuePositive(50 * 100);
    });

    return (
        <div className={styles.boxBarStatus}>
            <div 
                className={styles.barNegative} 
                style={{ 
                    height: `${window.innerWidth < 1200 ? (valueNegative + "px") : "100%"}`,
                    width: `${window.innerWidth > 1200 ? (valueNegative + "px") : "100%"}`,
                }}
            >
                <h3>DETRATORES</h3>
                <p>{valueNegative}</p>

                {status < 30 &&
                    <div className={styles.accountMenuContainer}>
                        <div className={styles.accountMenu}>
                            <div className={styles.accountMenuButton} onClick={() => setMenu(!menu)}>
                                <p>Você, está aqui!</p>
                                <img src={menuImage} alt="Menu" />
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
                }
            </div>

            <div 
                className={styles.barStable} 
                style={{ 
                    height: `${window.innerWidth < 1200 ? (valueStable + "px") : "100%"}`,
                    width: `${window.innerWidth > 1200 ? (valueStable + "px") : "100%"}`,
                }}
            >
                <h3>NEUTROS</h3>
                <p>{valueStable}</p>

                {status >= 30 && status <= 50 &&
                    <div className={styles.accountMenuContainer}>
                        <div className={styles.accountMenu}>
                            <div className={styles.accountMenuButton} onClick={() => setMenu(!menu)}>
                                <p>Você, está aqui!</p>
                                <img src={menuImage} alt="Menu" />
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
                }
            </div>

            <div 
                className={styles.barPositive} 
                style={{ 
                    height: `${window.innerWidth < 1200 ? (valuePositive + "px") : "100%"}`,
                    width: `${window.innerWidth > 1200 ? (valuePositive + "px") : "100%"}`,
                }}
            >
                <h3>Promotores</h3>
                <p>{valuePositive}</p>

                {status >= 51 &&
                    <div className={styles.accountMenuContainer}>
                        <div className={styles.accountMenu}>
                            <div className={styles.accountMenuButton} onClick={() => setMenu(!menu)}>
                                <p>Você, está aqui!</p>
                                <img src={menuImage} alt="Menu" />
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
                }
            </div>

            <div className={styles.buttons}>
                <button onClick={() => {
                    setStatusInfoActive(true);
                    setStatusActiveModal(!statusActiveModal);
                }}>
                    <img src={info} alt="Informações" />
                </button>

                <button>Compartilhar</button>
            </div>

            <Link to={"/"}>
                <img src={exit} alt="Sair" />
            </Link>

            <ModalInfo 
                active={statusInfoActive} 
                activeModal={statusActiveModal} 
                title={"Status"}
            />
        </div>
    )
}
