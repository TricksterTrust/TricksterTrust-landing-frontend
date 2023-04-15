import React, {useEffect, useState} from "react";
import {Cross} from "../../assets/Cross";
import styles from "./Stock.module.scss"
import axios from "axios";

const Stock = ({setStockOpened}) => {
	const [promotion, setPromotion] = useState(null)
	const [daysLeft, setDaysLeft] = useState('0')
	const [hourLeft, setHourLeft] = useState('0')
	const [minuteLeft, setMinuteLeft] = useState('0')
	const [secondLeft, setSecondLeft] = useState('0')
	
	// объявляю глоб. дату конца акции
	let endTime = 0;
	
	function updateCounter() {
		// текущая дата
		const currentTime = new Date();
		// получаю разницу в миллисекундах
		const diff = endTime - currentTime;
		
		// Перевод в дни / часы / минуты / секунды
		let days = String(Math.floor(diff / 1000 / 60 / 60 / 24));
		let hour = String(Math.floor(diff / 1000 / 60 / 60) % 24);
		let minute = String(Math.floor(diff / 1000 / 60) % 60);
		let second = String(Math.floor(diff / 1000) % 60);
		
		// добавляю нули в зависимости от длины
		setDaysLeft(days.length === 2 ? "0" + days : (days.length === 1 ? "00" + days : days))
		setHourLeft(hour.length === 2 ? hour : "0" + hour);
		setMinuteLeft(minute.length === 2 ? minute : "0" + minute);
		setSecondLeft(second.length === 2 ? second : "0" + second);
	}
	
	useEffect(() => {
		(async () => {
			await axios.get('https://api.trickstertrust.ru/v1/promotion/', { params: { primary: true } })
				.then(resp => setPromotion(resp.data))
				.catch(error => console.log(error));
		})()
	}, [])
	
	useEffect(() => {
		if (promotion) {
			// конечная дата
			endTime = new Date(promotion[0]['end_time']);
			setInterval(updateCounter, 1000)
		}
	}, [promotion])
	
	return (
		<div className={styles.stock}>
			<div className="container">
				{daysLeft && hourLeft && minuteLeft && secondLeft &&
					<div className={styles.content}>
						<h4>Успейте на открытие и получите год бесплатного обслуживания!</h4>
						<div className={styles.timer}>
							<span>Осталось</span>
							<div className={styles.body}>
								<div className={styles.cells}>
									<div className={styles.cell}>{daysLeft[0]}</div>
									<div className={styles.cell}>{daysLeft[1]}</div>
									<div className={styles.cell}>{daysLeft[2]}</div>
								</div>
								<span>Дней</span>
								<div className={styles.cells}>
									<div className={styles.cell}>{hourLeft[0]}</div>
									<div className={styles.cell}>{hourLeft[1]}</div>
								</div>
								<span className={styles.colon}>:</span>
								<div className={styles.cells}>
									<div className={styles.cell}>{minuteLeft[0]}</div>
									<div className={styles.cell}>{minuteLeft[1]}</div>
								</div>
								<span className={styles.colon}>:</span>
								<div className={styles.cells}>
									<div className={styles.cell}>{secondLeft[0]}</div>
									<div className={styles.cell}>{secondLeft[1]}</div>
								</div>
							</div>
						</div>
						<div className={styles.btnStock}>Оформить карту</div>
						<div onClick={() => {setStockOpened(false)}} className={styles.close}>
							<Cross/>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default Stock;