import React, { useEffect, useState, useContext } from "react";
import styles from "./BoxNPS.module.css";

// Context
import { User } from "../../context/User";

export default function BoxNPS() {
    const { statusNumber } = useContext(User);

    const [score, setScore] = useState(statusNumber);
    const [scoreColor, setScoreColor] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if((score >= 0 && score <= 30) || score < 0) {
            setScoreColor("#F04545");
            setStatus("Mal")
        } else if(score > 30 && score <= 79) {
            setScoreColor("#FAA924");
            setStatus("Estável");
        } else if(score >= 80) {
            setScoreColor("#04CE7A");
            setStatus("Saudável");
        }
    }, [statusNumber]);

    return (
        <div className={`${styles.boxNPS} ${(score >= 0 && score <= 30) || score < 0 ? styles.negative : score > 30 && score <= 70 ? styles.stable : score >= 80 && styles.positive}`}>
            <div className={styles.score}>
                <p>NPS SCORE</p>
                <h2 style={{ color: scoreColor }}>{score}</h2>
            </div>

            <div className={styles.status}>
                <p>Sua marca está</p>
                <h3 style={{ color: scoreColor }}>{status}</h3>
            </div>
        </div>
    )
}
