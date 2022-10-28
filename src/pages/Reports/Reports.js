import React from "react";
import styles from "./Reports.module.css";
import BoxInfo from "../../components/BoxInfo/BoxInfo";

export default function Reports() {
    return (
        <div className={styles.container}>
            <div className={styles.reports}>
                <div className={styles.reportsHeader}>
                    <h2>Relatórios</h2>

                    <button>SOLICITAR RELATÓRIO</button>
                </div>

                <div className={styles.reportsContainer}>
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
                        isFinished={true}
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
