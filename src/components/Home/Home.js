import React from "react";
import styles from "./Home.module.css";
import BoxAccount from "../BoxAccount/BoxAccount";
import BoxInfo from "../BoxInfo/BoxInfo";
import BoxMaterials from "../BoxMaterials/BoxMaterials";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <BoxAccount />
                <BoxInfo />
            </div>

            <div className={styles.column}>
                <BoxMaterials />
            </div>
        </div>
    )
}
