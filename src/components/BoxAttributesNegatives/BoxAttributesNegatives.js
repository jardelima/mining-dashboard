import React, { useState } from "react";
import styles from "./BoxAttributesNegatives.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";

// Images
import exit from "../../assets/images/exit.svg";
import graphic from "../../assets/images/lorem-graphic.png";
import info from "../../assets/images/info.svg";
import cloud from "../../assets/images/cloud.svg";
import register from "../../assets/images/registers-icon.svg";

export default function BoxAttributes() {
    const [attributesInfoActive, setAttributesInfoActive] = useState(false);
    const [attributesActiveModal, setAttributesActiveModal] = useState(false);

    return (
        <div className={styles.attributes}>
            <div className={styles.attributesHeader}>
                <h3>Atributos Negativos</h3>

                <Link to={"/registers"}>
                    <img src={exit} alt="Sair" />
                </Link>
            </div>

            <div className={styles.attributesGraphic}>
                <img src={graphic} alt="Gráfico"/>
            </div>

            <div className={styles.attributesFooter}>
                <Link to={"/registers/negatives-attributes"}>
                    ver registro
                    <img src={register} alt="Ver registro" />
                </Link>
                
                <div className={styles.buttons}>
                    <button onClick={() => {
                        setAttributesInfoActive(true);
                        setAttributesActiveModal(!attributesActiveModal);
                    }}>
                        <img src={info} alt="Informações"/>
                    </button>

                    <button onClick={() => console.log("Baixar relatório")}>
                        Baixar relatório
                        <img src={cloud} alt="Baixar relatório" />
                    </button>
                </div>
            </div>

            <ModalInfo 
                active={attributesInfoActive} 
                activeModal={attributesActiveModal} 
                title={"Atributos"}
            />
        </div>
    )
}
