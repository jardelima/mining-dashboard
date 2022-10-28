import React from "react";
import styles from "./BoxDisabled.module.css";
import { Link } from "react-router-dom";

// Images
import arrow from "../../assets/images/next-slider.svg";

export default function BoxDisabled() {
    return (
        <div className={styles.boxDisabled}>
            <div className={styles.boxContent}>
                <h2>FUNÇÃO inacessível</h2>

                <Link to={"/"}>
                    UPGRADE DE PLANO
                    <img src={arrow} alt="Atualizar plano" />
                </Link>
            </div>
        </div>
    )
}
