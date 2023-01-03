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
import background from "../../assets/images/background-upgrade.png";
import checkGreen from "../../assets/images/check-green.png";
import checkUncolor from "../../assets/images/check-uncolor.png";

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
    const [renewPlanModal, setRenewPlanModal] = useState(false);
    const [upgradePlanModal, setUpgradePlanModal] = useState(false);
    const [currentPlan, setCurrentPlan] = useState("light");
    const [typePayment, setTypePayment] = useState(true);

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
                                onChange={(event, value) => setDescription(value)}
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
                    <button onClick={() => setRenewPlanModal(true)}>
                        Renovar
                        <img src={renew} alt={"Renovar plano"} />
                    </button>

                    <button onClick={() => setUpgradePlanModal(true)}>
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

            <>
                <div className={`${styles.modalContainer} ${renewPlanModal && styles.modalActive}`}>
                    <div className={styles.modal} onClick={() => setRenewPlanModal(false)}></div>
                    <div className={`${styles.modalBox}`}>
                        <div className={styles.modalContent}>

                        </div>

                        <button onClick={() => setRenewPlanModal(false)}>
                            <img src={exit} alt="Fechar modal de informação" />
                        </button>
                    </div>
                </div>
            </>

            <>
                <div className={`${styles.modalContainer} ${upgradePlanModal && styles.modalActive}`}>

                    <div className={styles.modal} onClick={() => setUpgradePlanModal(false)}></div>

                    <div className={`${styles.modalBoxUpgrade}`} style={{ backgroundImage: `url(${background})` }}>

                        <div className={styles.modalContent}>
                            <div className={styles.modalHeader}>
                                <h3>Alterar plano</h3>

                                <div 
                                    className={styles.typePayment}
                                    onClick={() => {
                                        setTypePayment(!typePayment);
                                    }}
                                >
                                    <p>Mensal</p>
                                    <div
                                        className={`${styles.checkboxPayment} ${typePayment ? styles.paymentYearly : styles.paymentMonthly}`}
                                    >
                                    </div>
                                    <p>Anual</p>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div 
                                    className={`${styles.plansItem} ${currentPlan === "basic" && styles.currentPlan}`}
                                >
                                    <div className={styles.plansTitle}>BASIC</div>

                                    <div className={styles.plansValue}>{typePayment ? "R$0000" : "R$000"}</div>

                                    <span>POR USUÁRIO / MÊS</span>

                                    <div className={styles.plansDescription}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        </p>
                                    </div>

                                    <div className={styles.plansAttributes}>
                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            NPS Score
                                        </div>

                                        <div className={styles.plansAttribute}>
                                            <img src={checkUncolor} alt="check" />
                                            Atributos positivos
                                        </div>

                                        <div className={styles.plansAttribute}>
                                            <img src={checkUncolor} alt="check" />
                                            Atributos negativos
                                        </div>

                                        <div className={styles.plansAttribute}>
                                            <img src={checkUncolor} alt="check" />
                                            Gênero de público
                                        </div>
                                    </div>

                                    <>
                                        {currentPlan === "basic" 
                                            ?
                                            <button className={styles.currentPlanButton}>Plano Atual</button> 
                                            :
                                            <button>Quero esse plano</button>
                                        }
                                    </>

                                </div>

                                <div 
                                    className={`${styles.plansItem} ${currentPlan === "light" && styles.currentPlan}`}
                                >
                                    <div className={styles.plansTitle}>LIGHT</div>

                                    <div className={styles.plansValue}>{typePayment ? "R$0000" : "R$000"}</div>

                                    <span>POR USUÁRIO / MÊS</span>

                                    <div className={styles.plansDescription}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        </p>
                                    </div>

                                    <div className={styles.plansAttributes}>
                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            NPS Score
                                        </div>

                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            Atributos positivos
                                        </div>

                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            Atributos negativos
                                        </div>

                                        <div className={styles.plansAttribute}>
                                            <img src={checkUncolor} alt="check" />
                                            Gênero de público
                                        </div>
                                    </div>

                                    <>
                                        {currentPlan === "light" 
                                            ?
                                            <button className={styles.currentPlanButton}>Plano Atual</button> 
                                            :
                                            <button>Quero esse plano</button>
                                        }
                                    </>
                                </div>

                                <div 
                                    className={`${styles.plansItem} ${currentPlan === "pro" && styles.currentPlan}`}
                                >
                                    <div className={styles.plansTitle}>PRO</div>

                                    <div className={styles.plansValue}>{typePayment ? "R$0000" : "R$000"}</div>

                                    <span>POR USUÁRIO / MÊS</span>

                                    <div className={styles.plansDescription}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        </p>
                                    </div>

                                    <div className={styles.plansAttributes}>
                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            NPS Score
                                        </div>

                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            Atributos positivos
                                        </div>

                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            Atributos negativos
                                        </div>

                                        <div className={styles.plansAttributeCheck}>
                                            <img src={checkGreen} alt="check" />
                                            Gênero de público
                                        </div>
                                    </div>

                                    <>
                                        {currentPlan === "pro" 
                                            ?
                                            <button className={styles.currentPlanButton}>Plano Atual</button> 
                                            :
                                            <button>Quero esse plano</button>
                                        }
                                    </>

                                </div>

                                <div className={styles.plansItem}>
                                    <div className={styles.plansTitle}>CONSULTIVO</div>

                                    <div className={styles.plansValue}>Que tal um plano especial?</div>

                                    <div className={styles.plansDescription}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget condimentum odio. Donec molestie neque at volutpat euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id felis nec tortor iaculis ultrices. Curabitur nec arcu ligula. Fusce id justo euismod, vestibulum diam quis, placerat elit.
                                        </p>
                                    </div>

                                    <button>FALE CONOSCO</button>
                                </div>
                            </div>

                            <div className={styles.modalFooter}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate lacinia rhoncus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

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
