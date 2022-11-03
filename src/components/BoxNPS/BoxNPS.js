import React, { useEffect, useState } from "react";
import styles from "./BoxNPS.module.css";

export default function BoxNPS() {
    const [score, setScore] = useState(80);
    const [scoreColor, setScoreColor] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if((score >= 0 && score <= 30) || score < 0) {
            setScoreColor("#F04545");
            setStatus("Mal")
        } else if(score >= 40 && score <= 79) {
            setScoreColor("#FAA924");
            setStatus("Estável");
        } else if(score >= 80) {
            setScoreColor("#04CE7A");
            setStatus("Saudável");
        }
    }, []);

    return (
        <div className={styles.boxNPS}>
            {loading ?
                <p>Carregando...</p>

                :
                <>
                    <div className={styles.score}>
                        <p>NPS SCORE</p>
                        <h2 style={{ color: scoreColor }}>{score}</h2>
                    </div>

                    <div className={styles.status}>
                        <p>Sua marca está</p>
                        <h3 style={{ color: scoreColor }}>{status}</h3>
                    </div>
                </>
            }
        </div>
    )
}