import React from "react";
import styles from "./Home.module.css";
import BoxAccount from "../../components/BoxAccount/BoxAccount";
import BoxInfo from "../../components/BoxInfo/BoxInfo";
import BoxMaterials from "../../components/BoxMaterials/BoxMaterials";
import ModalWelcome from "../../components/ModalWelcome/ModalWelcome";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <BoxAccount />

                <BoxInfo 
                    isCountdown={true}
                    buttonsActive={false}
                    isFinished={false}
                />
            </div>

            <div className={styles.column}>
                <BoxMaterials />
            </div>

            <ModalWelcome />
        </div>
    )
}
