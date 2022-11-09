import React, { useEffect, useState } from "react"
import styles from "./BoxInfo.module.css";
import Countdown from "../Countdown/Countdown";
import ModalInfo from "../ModalInfo/ModalInfo";
import { Link } from "react-router-dom";

// Images
import loader from "../../assets/images/loader.svg";
import info from "../../assets/images/info.svg";
import check from "../../assets/images/check.svg";
import cloud from "../../assets/images/cloud.svg";
import registers from "../../assets/images/registers-icon.svg";

export default function BoxInfo(props) {
    const [infoActive, setInfoActive] = useState(false);
    const [activeModal, setActiveModal] = useState(false);
    const [isCountdown, setIsCountdown] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [buttonsActive, setButtonsActive] = useState(false);

    useEffect(() => setIsCountdown(props.isCountdown) ,[props.isCountdown]);

    useEffect(() => setButtonsActive(props.buttonsActive), [props.buttonsActive]);

    useEffect(() => setIsFinished(props.isFinished), [props.isFinished]);

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const date = new Date();
    const day = date.toDateString().split(" ")[2];
    const month = months[date.getMonth()];

    return (
        <div className={styles.info}>
            <div className={styles.infoDate}>
                <p>{day} de {month}</p>
                
                <small>ID #2121</small>
            </div>

            <div className={`${styles.infoStatus} ${isFinished && styles.statusFinished}`}>
                <p>Status</p>

                {isFinished ? 
                    <p>
                        Concluído
                        <img src={check} alt="Concluído" />
                    </p>
                    :
                    <p>
                        Processando
                        <img src={loader} alt="Processando"/>
                    </p>
                }
            </div>

            {isCountdown && 
                <div className={styles.infoHours}>
                    <Countdown />
                </div>
            }

            {buttonsActive && 
                <div className={styles.infoButtons}>
                    <button>
                        BAIXAR RELÁTORIO
                        <img src={cloud} alt="Baixar relatórios"/>
                    </button>

                    <Link to={"/registers"}>
                        ver registro
                        <img src={registers} alt="Ver registros"/>
                    </Link>
                </div>
            }

            <div 
                className={styles.questions} 
                onClick={() => {
                    setInfoActive(true);
                    setActiveModal(!activeModal);
                }}
            >
                <img src={info} alt="Dúvidas" /> 
            </div>

            <ModalInfo 
                active={infoActive} 
                activeModal={activeModal} 
                title={"Status"}
            />
        </div>
    )
}
