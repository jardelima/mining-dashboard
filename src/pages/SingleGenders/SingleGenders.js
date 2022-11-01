import React from "react";
import styles from "./SingleGenders.module.css";
import BoxBarsGenders from "../../components/BoxBarsGenders/BoxBarsGenders";

export default function SingleGenders() {
    return (
        <div className={styles.container}>   
            <BoxBarsGenders />
        </div>
    )
}
