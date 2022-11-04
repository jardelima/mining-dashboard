import React, { useState } from "react";
import styles from "./BoxAccount.module.css"; 
import { Link } from "react-router-dom";

// Images
import logo from "../../assets/images/logo.png";
import config from "../../assets/images/config.svg";
import registers from "../../assets/images/registers.svg";
import logout from "../../assets/images/logout.svg";
import changePlan from "../../assets/images/change-plan.svg";
import menuImage from "../../assets/images/icon-menu.svg";

export default function BoxAccount() {
    const [menu, setMenu] = useState(false);

    return (
        <div className={styles.account}>
            <div className={styles.accountColumn}>
                <div className={styles.accountHello}>
                    <p><span>Olá</span> Nome do usuário</p>
                </div>

                <Link to={"/configs"} className={styles.accountMy}>minha conta</Link>
            </div>

            <div className={styles.accountColumn}>
                <div className={styles.accountMenu}>
                    <div className={styles.accountMenuButton} onClick={() => setMenu(!menu)}>
                        <img src={menuImage} alt="Menu" />
                    </div>

                    <div className={`${styles.accountMenuLinks} ${menu && styles.accountMenuLinksActive}`}>
                        <Link to={"/registers"}>
                            <img src={registers} alt="Meus Relatórios" />
                            Meus relatórios
                        </Link>
                        <Link to={"/configs"}>
                            <img src={config} alt="Configurações" />
                            Configurações
                        </Link>
                        <Link to={"/change-plan"}>
                            <img src={changePlan} alt="Alterar plano" /> 
                            alterar plano   
                        </Link>
                        <div className={styles.logout}>
                            <img src={logout} alt="Sair" />
                            Sair
                        </div>
                    </div>
                </div>

                <div className={styles.logo}>
                    <img src={logo} alt="Logo" /> 
                </div>
            </div>
        </div>
    )
}
