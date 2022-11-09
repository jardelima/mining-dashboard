import React from "react";
import styles from "./Registers.module.css";
import BoxRegisters from "../../components/BoxRegisters/BoxRegisters";
import BoxInfo from "../../components/BoxInfo/BoxInfo";

export default function Registers() {
    return (
        <div className={styles.container}>
            <div className={styles.registers}>
                <h2>Registros</h2>

                <div className={styles.registersContainer}>
                    <BoxRegisters 
                        titleBox={"NPS Score"}
                        titleModal={"NPS Score"}
                        linkTo={"/registers/nps"}
                    />

                    <BoxRegisters 
                        titleBox={"Gênero do público"}
                        titleModal={"Gênero do público"}
                        linkTo={"/genders/graphic-genders"}
                    />

                    <BoxRegisters 
                        titleBox={"Atributos positivos"}
                        titleModal={"Atributos positivos"}
                        linkTo={"/registers/positives-attributes"}
                    />

                    <BoxRegisters 
                        titleBox={"Atributos negativos"}
                        titleModal={"Atributos negativos"}
                        linkTo={"/registers/negatives-attributes"}
                    />
                </div>
            </div>

            <div className={styles.lastReports}>
                <h2>Últimos relatórios</h2>

                <div className={styles.lastReportsContainer} style={{height: `${window.innerWidth > 1200 && window.innerHeight - 120}px`}}>
                    <BoxInfo 
                        isCountdown={false}
                        buttonsActive={true}
                        isFinished={true}
                    />
                    <BoxInfo 
                        isCountdown={false}
                        buttonsActive={true}
                        isFinished={false}
                    />
                    <BoxInfo 
                        isCountdown={false}
                        buttonsActive={true}
                        isFinished={false}
                    />
                    <BoxInfo 
                        isCountdown={false}
                        buttonsActive={true}
                        isFinished={false}
                    />
                </div>
            </div>
        </div>
    )
}
