import React, { useState } from "react";
import styles from "./Configs.module.css";
import Input from "../../components/Input/Input";
import ModalInfo from "../../components/ModalInfo/ModalInfo";
import { Link } from "react-router-dom";

// Images
import exit from "../../assets/images/exit.svg";
import info from "../../assets/images/info.svg";
import renew from "../../assets/images/renew.svg";
import upgrade from "../../assets/images/upgrade.svg";
import logo from "../../assets/images/logo-enterprise.png";

export default function Configs() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [localization, setLocalization] = useState("");
    const [description, setDescription] = useState("");

    const [planInfoActive, setPlanInfoActive] = useState(false);
    const [planActiveModal, setPlanActiveModal] = useState(false);
    const [configInfoActive, setConfigInfoActive] = useState(false);
    const [configActiveModal, setConfigActiveModal] = useState(false);

    function changeEmail(event) {
        event.preventDefault();

        console.log("Trocando Email")
    }

    function changePassword(event) {
        event.preventDefault();

        console.log("Trocando Senha")
    }

    function changeProfile(event) {
        event.preventDefault();

        console.log("Atualizando Perfil");
    }

    return (
        <div className={styles.container}>
            <div className={styles.configs}>
                <h2>Configurações</h2>

                <div className={styles.configsAccount}>
                    <div className={styles.configsDescription}>
                        <h3>Conta</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                    <form onSubmit={changeEmail}>
                        <div className={styles.field}>
                            <Input 
                                label="Endereço de email"
                                id="email"
                                type="email"
                                value={email}
                                setValue={setEmail}
                                placeholder={"contato@email.com"}
                            />
                        </div>

                        <button>Alterar</button>
                    </form>

                    <form onSubmit={changePassword}>
                        <div className={styles.fieldContainer}>
                            <div className={styles.field}>
                                <Input 
                                    label="senha atual"
                                    id="password"
                                    type="password"
                                    value={password}
                                    setValue={setPassword}
                                    placeholder={"••••••••••••••"}
                                />
                            </div>

                            <div className={styles.field}>
                                <Input 
                                    label="NOVA SENHA"
                                    id="newPassword"
                                    type="password"
                                    value={newPassword}
                                    setValue={setNewPassword}
                                />
                            </div>

                            <div className={styles.field}>
                                <Input 
                                    label="CONFIRMAR SENHA"
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    setValue={setConfirmPassword}
                                />
                            </div>
                        </div>

                        <button>Alterar</button>
                    </form>
                </div>
                
                <div className={styles.profile}>
                    <h3>Perfil</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <form onSubmit={changeProfile}>
                        <div className={styles.profileFieldContainer}>
                            <div className={styles.field}>
                                <Input 
                                    label="Nome do usuário"
                                    id="name"
                                    type="text"
                                    value={name}
                                    setValue={setName}
                                    placeholder={"Nome do usuário"}
                                />
                            </div>

                            <div className={styles.field}>
                                <Input 
                                    label="website"
                                    id="website"
                                    type="text"
                                    value={website}
                                    setValue={setWebsite}
                                    placeholder={"www.suaempresa.com"}
                                />
                            </div>

                            <div className={styles.field}>
                                <Input 
                                    label="Localização"
                                    id="localization"
                                    type="text"
                                    value={localization}
                                    setValue={setLocalization}
                                    placeholder={"Cidade, estado"}
                                />
                            </div>
                        </div>
                        
                        <div className={styles.profileFieldRow}>
                            <label htmlFor="description">descrição/observações:</label>

                            <textarea 
                                id="description"
                                value={description}
                                onChange={setDescription}
                                placeholder={"Nome do usuário"}
                            />
                        </div>

                        <button>Alterar</button>
                    </form>
                </div>

                <Link to={"/"}>
                    <img src={exit} alt="Sair de configurações" />
                </Link>

                <button
                    onClick={() => {
                        setConfigInfoActive(true);
                        setConfigActiveModal(!configActiveModal);
                    }}
                >
                    <img src={info} alt="Acessar informações" />
                </button>
            </div>

            <div className={styles.plan}>
                <div className={styles.planHeader}>
                    <p>Plano</p>

                    <button 
                        onClick={() => {
                            setPlanInfoActive(true);
                            setPlanActiveModal(!planActiveModal);
                        }}
                    >
                        <img src={info} alt="Acessar informações" />
                    </button>
                </div>

                <div className={styles.planTitle}>
                    <h3>Light</h3>
                    <p>12 DIAS RESTANTES</p>
                </div>

                <div className={styles.planFooter}>
                    <button>
                        Renovar
                        <img src={renew} alt={"Renovar plano"} />
                    </button>

                    <button>
                        Upgrade
                        <img src={upgrade} alt={"Atualizar plano"} />
                    </button>
                </div>
            </div>

            <div className={styles.enterprise}>
                <div className={styles.enterpriseHeader}>
                    <p>Logo da empresa</p>
                </div>

                <div className={styles.enterpriseLogo}>
                    <img src={logo} alt="Logo da empresa" />
                </div>

                <div className={styles.enterpriseFooter}>
                    <button>
                        Carregar no pc
                        <img src={upgrade} alt={"Atualizar plano"} />
                    </button>
                </div>
            </div>

            <ModalInfo 
                active={planInfoActive} 
                activeModal={planActiveModal} 
                title={"Planos"}
            />

            <ModalInfo 
                active={configInfoActive} 
                activeModal={configActiveModal} 
                title={"Configurações"}
            />
        </div>
    )
}
