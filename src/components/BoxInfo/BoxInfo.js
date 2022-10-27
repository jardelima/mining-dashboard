import React from "react"
import styles from "./BoxInfo.module.css";
import Countdown from "../Countdown/Countdown";

// Images
import loader from "../../assets/images/loader.svg";
import info from "../../assets/images/info.svg";

export default function BoxInfo() {
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

            <div className={styles.infoStatus}>
                <p>Status</p>

                <p>
                    Processando
                    <img src={loader} alt="Processando"/>
                </p>
            </div>

            <div className={styles.infoHours}>
                <Countdown />
            </div>

            <div className={styles.questions}>
                <img src={info} alt="Dúvidas" /> 
            </div>
        </div>
    )
}
