import React from "react";
import styles from "./Dashboard.module.css";
import BoxAccount from "../../components/BoxAccount/BoxAccount";
import BoxNPS from "../../components/BoxNPS/BoxNPS";
import BoxArea from "../../components/BoxArea/BoxArea";
import BarStatus from "../../components/BarStatus/BarStatus";
import BoxGraphicDefault from "../../components/BoxGraphicDefault/BoxGraphicDefault";
import BoxBarGenders from "../../components/BoxBarsGenders/BoxBarsGenders";

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
                <BoxAccount />
                <BoxNPS />
                <BoxArea />
            </div>

            <BarStatus />

            <div className={styles.dashboardFooter}>
                <BoxGraphicDefault 
                    title="Atributos Positivos" 
                    titleModal="Atributos Positivos" 
                    linkGraphic="/positives-attributes"
                />
                <BoxGraphicDefault 
                    title="Atributos Negativos" 
                    titleModal="Atributos Negativos"
                    linkGraphic="/negatives-attributes"
                />
                <BoxBarGenders />
            </div>
        </div>
    )
}
