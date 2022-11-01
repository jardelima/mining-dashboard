import React, { useEffect, useState } from "react";
import styles from "./BoxBarsGenders.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";

// Images
import info from "../../assets/images/info.svg";
import register from "../../assets/images/registers-icon.svg";
import arrow from "../../assets/images/next-slider.svg";
import exit from "../../assets/images/exit.svg";

export default function BoxBarsGenders() {
    const [barsInfoActive, setBarsInfoActive] = useState(false);
    const [barsActiveModal, setBarsActiveModal] = useState(false);
    const [singleGenders, setSingleGenders] = useState(false);
    let percentageMasculine;
    let percentageFeminine;

    const data = [
        {
            name: "masculine",
            value: 61.6,
        },
        {
            name: "feminine",
            value: 32.3,
        },
    ];

    useEffect(() => {
        setSingleGenders(window.location.href.split("/")[4] === "genders");
    }, []);

    const desktopBarFeminine = {
        width: "",
        height: singleGenders ? "60px" : "20px",
    }

    const mobileBarFeminine = {
        width: "10%",
        height: "",
    }

    const desktopBarMasculine = {
        width: "",
        height: singleGenders ? "60px" : "20px",
    }

    const mobileBarMasculine = {
        width: "10%",
        height: "",
    }


    function getValues() {
        let total = 0;
        let valueFeminine;
        let valueMasculine;

        data.forEach(data => {
            total += data.value;

            if(data.name === "feminine") {
                valueFeminine = data.value;
            } else {
                valueMasculine = data.value;
            }
        });

        percentageMasculine = valueMasculine * 100 / total;
        percentageFeminine = valueFeminine * 100 / total;

        desktopBarFeminine.width = percentageFeminine.toFixed(0) + "%";
        mobileBarFeminine.height = percentageFeminine.toFixed(0) + "%";
        desktopBarMasculine.width = percentageMasculine.toFixed(0) + "%";
        mobileBarMasculine.height = percentageMasculine.toFixed(0) + "%";

        return (
            <div className={styles.bars}>
                <div 
                    className={styles.barContainer} 
                    style={{ 
                        height: singleGenders && window.innerWidth > 1200 && "max-content", 
                        marginBottom: singleGenders && window.innerWidth > 1200 && "60px", 
                    }}
                >
                    <p style={{fontSize: singleGenders && window.innerWidth > 1200 && "36px"}}>Feminino</p>

                    <div className={styles.bar}>
                        <div 
                            className={styles.barFeminine} 
                            style={window.innerWidth > 1200 ? desktopBarFeminine : mobileBarFeminine}
                        ></div>

                        <span 
                            className={styles.labelFeminine} 
                            style={{ fontSize: singleGenders && window.innerWidth > 1200 && "50px" }}
                        >
                            {percentageFeminine.toFixed(0)}%
                        </span>
                    </div>
                </div>

                <div className={styles.barContainer}>
                    <p style={{fontSize: singleGenders && window.innerWidth > 1200 && "36px"}}>Masculino</p>

                    <div className={styles.bar}>
                        <div 
                            className={styles.barMasculine} 
                            style={window.innerWidth > 1200 ? desktopBarMasculine : mobileBarMasculine}
                        ></div>

                        <span 
                            className={styles.labelMasculine} 
                            style={{ fontSize: singleGenders && window.innerWidth > 1200 && "50px" }}
                        >
                            {percentageMasculine.toFixed(0)}%
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.boxBars}>
            <div className={styles.boxBarsHeader}>
                <h3 style={{fontSize: `${singleGenders && window.innerWidth > 1200 && 42}px`}}>Gênero do Público</h3>

                {!singleGenders && 
                    <button
                        onClick={() => {
                            setBarsInfoActive(true);
                            setBarsActiveModal(!barsActiveModal);
                        }}
                    >
                        <img src={info} alt="Informações" />
                    </button>
                }

                {singleGenders && 
                    <Link to={"/"}>
                        <img src={exit} alt="Sair" />
                    </Link>
                }
            </div>

            {getValues()}

            <div className={styles.boxBarsFooter}>
                <Link to={"/"} className={styles.registerButton}>
                    ver registro
                    <img src={register} alt="Registros" />
                </Link>

                {singleGenders && 
                    <div className={styles.buttons}>
                        <button
                            onClick={() => {
                                setBarsInfoActive(true);
                                setBarsActiveModal(!barsActiveModal);
                            }}
                        >
                            <img src={info} alt="Informações" />
                        </button>

                        <Link to={"/registers/graphic-genders"} className={styles.graphicButton}>
                            GRÁFICO COMPLETO
                            <img src={arrow} alt="Gráficos completos" /> 
                        </Link>
                    </div>
                }

                {!singleGenders && 
                    <Link to={"/registers/genders"} className={styles.graphicButton}>
                        GRÁFICO COMPLETO
                        <img src={arrow} alt="Gráficos completos" /> 
                    </Link>
                }
            </div>

            <ModalInfo 
                active={barsInfoActive} 
                activeModal={barsActiveModal} 
                title={"Gênero do Público"}
            />
        </div>
    )
}
