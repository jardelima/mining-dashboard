import React, { useState } from "react";
import styles from "./BoxRegisters.module.css";
import { Link } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";

// Images
import seeRegisters from "../../assets/images/see-registers.svg";
import info from "../../assets/images/info.svg";

export default function BoxRegisters(props) {
    const [registerInfoActive, setRegisterInfoActive] = useState(false);
    const [registerActiveModal, setRegisterActiveModal] = useState(false);

    return (
        <div className={styles.boxRegisters}>
            <h3>{props.titleBox}</h3>

            <div className={styles.boxRegistersButtons}>
                <Link to={"/"}>
                    VER REGISTRO
                    <img src={seeRegisters} alt="Pasta de registros" />
                </Link>

                <button
                    onClick={() => {
                        setRegisterInfoActive(true);
                        setRegisterActiveModal(!registerActiveModal);
                    }}
                >
                    <img src={info} alt="Informações" />
                </button>
            </div>

            <ModalInfo 
                active={registerInfoActive} 
                activeModal={registerActiveModal} 
                title={props.titleModal}
            />
        </div>  
    )
}
