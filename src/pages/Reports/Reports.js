import React, { useState } from "react";
import styles from "./Reports.module.css";
import BoxInfo from "../../components/BoxInfo/BoxInfo";
import bell from "../../assets/images/bell.svg";

export default function Reports() {
    const [solicitations, setSolicitations] = useState(0);
    const [modalSolicitation, setModalSolicitation] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.reports}>
                <div className={styles.reportsHeader}>
                    <h2>Relatórios</h2>

                    <button onClick={() => setModalSolicitation(true)}>SOLICITAR RELATÓRIO</button>
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

            <div className={`${styles.modalContainer} ${!modalSolicitation && styles.modalDisabled}`}>

                <div className={styles.modalClose} onClick={() => setModalSolicitation(false)}></div>

                <div className={styles.modalBox}>
                    <div className={styles.modalTitle}>
                        <h2>Solicitar Relatório</h2>
                    </div>

                    <div className={styles.modalContent}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis condimentum ullamcorper. Proin pulvinar lectus ligula, ut lobortis justo suscipit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>

                        <div className={styles.modalButtons}>
                            <button onClick={() => setModalSolicitation(false)}><b>{solicitations}</b> solicitações restantes</button>
                            <button onClick={() => setModalSolicitation(false)}>FAZER NOVO PEDIDO</button>
                        </div>
                    </div>

                    <div className={styles.modalFooter}>
                        <img src={bell} alt="Notificações" />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis condimentum ullamcorper. Proin pulvinar lectus ligula, ut lobortis justo suscipit sodales. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
