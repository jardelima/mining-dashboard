import React, { useState } from "react";
import styles from "./SingleNPS.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../../components/ModalInfo/ModalInfo";
import GraphicNPS from "../../components/GraphicNPS/GraphicNPS";

// Images
import info from "../../assets/images/info.svg";
import register from "../../assets/images/registers-icon.svg";
import cloud from "../../assets/images/cloud.svg";
import exit from "../../assets/images/exit.svg";

export default function SingleNPS() {
    const [npsInfoActive, setNPSInfoActive] = useState(false);
    const [npsActiveModal, setNPSActiveModal] = useState(false);

    return (
        <div className={styles.boxBars}>
            <div className={styles.boxBarsHeader}>
                <h3>NPS Score <span>/Registro</span></h3>

                <Link to={"/registers"}>
                    <img src={exit} alt="Sair" />
                </Link>
            </div>

            <GraphicNPS />

            {window.innerWidth < 1200 && <p>Arraste para visualizar o gráfico</p>}

            <div className={styles.boxBarsFooter}>
                <Link to={"/registers"} className={styles.registerButton}>
                    ver registro
                    <img src={register} alt="Registros" />
                </Link>

                <div className={styles.buttons}>
                    <button
                        onClick={() => {
                            setNPSInfoActive(true);
                            setNPSActiveModal(!npsActiveModal);
                        }}
                    >
                        <img src={info} alt="Informações" />
                    </button>

                    <button className={styles.graphicButton}>
                        Baixar Relatório
                        <img src={cloud} alt="Gráficos completos" /> 
                    </button>
                </div>
            </div>

            <ModalInfo 
                active={npsInfoActive} 
                activeModal={npsActiveModal} 
                title={"NPS Score"}
            />
        </div>
    )
}
