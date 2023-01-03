import React, { useState } from "react";
import styles from "./BoxAttributesNegatives.module.css";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    return (
        <div className={styles.attributes}>

            <div className={styles.mainAttributes}>
                <div className={styles.attributesHeader}>
                    <h3>Principais Atributos Negativos</h3>

                    <Link onClick={() => navigate(-1)}>
                        <img src={exit} alt="Sair" />
                    </Link>
                </div>

                <div className={styles.attributesGraphic}>
                    <img src={graphic} alt="Gráfico"/>
                </div>
            </div>

            <div className={styles.generalAttributes}>
                <div className={styles.attributesHeader}>
                    <h3>Atributos Negativos</h3>
                </div>

                <div className={styles.attributesGraphic}>
                    <img src={graphic} alt="Gráfico"/>
                </div>

                <div className={styles.attributesFooter}>
                    <Link to={"/registers"}>
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
            </div>

            <ModalInfo 
                active={attributesInfoActive} 
                activeModal={attributesActiveModal} 
                title={"Atributos"}
            />
        </div>
    )
}
