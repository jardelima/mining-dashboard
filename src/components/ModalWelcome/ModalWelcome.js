import React, { useState, useContext } from "react";
import styles from "./ModalWelcome.module.css";

// Context
import { User } from "../../context/User/index";

export default function ModalWelcome() {
    const { modalWelcome, setModalWelcome } = useContext(User);

    const [modal, setModal] = useState(modalWelcome);

    return (
        <div className={`${styles.modalContainer} ${!modal && styles.modalDisabled}`}>
            <div className={styles.modalBox}>
                <div className={styles.modalTitle}>
                    <h2>Bem vindo a Mining Metrics!</h2>
                </div>

                <div className={styles.modalContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis condimentum ullamcorper. Proin pulvinar lectus ligula, ut lobortis justo suscipit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    </p>

                    <div className={styles.modalButtons}>
                        <button onClick={() => {setModal(false); setModalWelcome(false)}}>fazer o tour</button>
                        <button onClick={() => {setModal(false); setModalWelcome(false)}}>começar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
