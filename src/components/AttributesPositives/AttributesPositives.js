import React, { useState } from "react";
import styles from "./AttributesPositives.module.css";
import { Link, useNavigate } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";
import SlideAttributes from "../SlideAttributes/SlideAttributes";

// Images
import exit from "../../assets/images/exit.svg";
import info from "../../assets/images/info.svg";
import cloud from "../../assets/images/cloud.svg";
import graphic from "../../assets/images/lorem-graphic.png";
import register from "../../assets/images/registers-icon.svg";

export default function AttributesPositives() {
    const [attributesInfoActive, setAttributesInfoActive] = useState(false);
    const [attributesActiveModal, setAttributesActiveModal] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.attributes}>
            <div className={styles.attributesHeader}>
                <h3>Atributos Positivos <span>/Registro</span></h3>

                <Link onClick={() => navigate(-1)}>
                    <img src={exit} alt="Sair" />
                </Link>
            </div>

            {window.innerWidth < 1200 ? 
                <SlideAttributes />
                :
                <div className={styles.attributesItems}>
                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>

                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>

                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>

                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>

                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>

                    <div className={styles.attributesItem}>
                        <h4>22 de Janeiro</h4>

                        <img src={graphic} alt="Gráfico" />

                        <button>
                            Baixar relatório
                            <img src={cloud} alt="Baixar relatório" />
                        </button>
                    </div>
                </div>
            }

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

            <ModalInfo 
                active={attributesInfoActive} 
                activeModal={attributesActiveModal} 
                title={"Atributos"}
            />
        </div>
    )
}
