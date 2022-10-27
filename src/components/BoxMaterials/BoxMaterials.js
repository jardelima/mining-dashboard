import React from "react";
import styles from "./BoxMaterials.module.css";
import SlideMaterials from "../SlideMaterials/SlideMaterials";

export default function BoxMaterials() {
    return (
        <div className={styles.materials}>
            <div className={styles.materialsTitle}>
                <h2>Enquanto seu primeiro relátorio fica pronto aproveite alguns de nossos materiais sobre data science.</h2>
            </div>

            <SlideMaterials />
        </div>
    )
}
