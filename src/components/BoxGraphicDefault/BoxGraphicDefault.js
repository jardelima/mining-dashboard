import React, { useState } from "react";
import styles from "./BoxGraphicDefault.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";
import BoxDisabled from "../BoxDisabled/BoxDisabled";

// Images
import info from "../../assets/images/info.svg";
import graphic from "../../assets/images/lorem-graphic.png";
import register from "../../assets/images/registers-icon.svg";
import arrow from "../../assets/images/next-slider.svg";

// A montagem desse componente segue esse padrão

{/* <BoxGraphicDefault 
    title={"Atributos Positivos"}
    titleModal={"Atributos positivos"}
/> */}

export default function BoxGraphicDefault(props) {
    const [graphicInfoActive, setGraphicInfoActive] = useState(false);
    const [graphicActiveModal, setGraphicActiveModal] = useState(false);
    const [graphicDisabled, setGraphicDisabled] = useState(false);

    return (
        <div className={styles.boxGraphicDefault}>
            <div className={styles.boxHeader}>
                <h4>{props.title}</h4>

                <button
                    onClick={() => {
                        setGraphicInfoActive(true);
                        setGraphicActiveModal(!graphicActiveModal);
                    }}
                >
                    <img src={info} alt="Informações" /> 
                </button>
            </div>

            <div className={styles.boxGraphic}>
                <img src={graphic} alt="Lorem Gráfico" />
            </div>

            <div className={styles.boxFooter}>
                <Link to={"/"}>
                    Ver registro
                    <img src={register} alt="Ver registros" />
                </Link>

                <Link to={"/"}>
                    Ver Gráfico completo
                    <img src={arrow} alt="Ver gráfico completo" />
                </Link>
            </div>

            <ModalInfo 
                active={graphicInfoActive} 
                activeModal={graphicActiveModal} 
                title={props.titleModal}
            />

            {graphicDisabled && <BoxDisabled />}
        </div>
    )
}
