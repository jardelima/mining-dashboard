import React, { useState, useRef, useEffect } from "react";

export default function Countdown() {
	const Ref = useRef(null);

	const [timer, setTimer] = useState("00:00:00");

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } = getTimeRemaining(e);

		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : "0" + hours) + ":" +
				(minutes > 9 ? minutes : "0" + minutes) + ":"
				+ (seconds > 9 ? seconds : "0" + seconds)
			)
		}
	}

	const clearTimer = (e) => {
        // Aqui se altera as horas no contador
		setTimer("14:00:00");

		if (Ref.current) clearInterval(Ref.current);

		const id = setInterval(() => {
			startTimer(e);
		}, 1000);

		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
        // Aqui se troca o 50400 pela quantidade de horas
        // da linha 32 em segundos.
        // Por exemplo, se setTimer(00:01:00)
        // Aqui tem que ser 1 minuto em segundos, no caso, 60 segundos.
		deadline.setSeconds(deadline.getSeconds() + 50400);

		return deadline;
	}

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

    return (
        <p>{timer}</p>
    )
}
