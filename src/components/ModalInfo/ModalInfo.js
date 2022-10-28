import React, { useEffect, useState } from "react";
import styles from "./ModalInfo.module.css";

// Images
import info from "../../assets/images/info.svg";
import exit from "../../assets/images/exit.svg";

export default function ModalInfo(props) {
    const [modalInfo, setModalInfo] = useState(props.active);

    useEffect(() => setModalInfo(props.active), [props.activeModal])

    return (
        <div className={`${styles.modalContainer} ${modalInfo && styles.modalActive}`}>
            <div className={styles.modalBox}>
                <div className={styles.modalTitle}>
                    <div className={styles.titleImage}>
                        <img src={info} alt="Imagem da informação" />
                    </div>

                    <div className={styles.title}>
                        <p>Informação</p>
                        <h4>{props.title}</h4>
                    </div>
                </div>

                <div className={styles.modalContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis condimentum ullamcorper. Proin pulvinar lectus ligula, ut lobortis justo suscipit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    </p>
                </div>

                <button onClick={() => setModalInfo(false)}>
                    <img src={exit} alt="Fechar modal de informação" />
                </button>
            </div>
        </div>
    )
}
