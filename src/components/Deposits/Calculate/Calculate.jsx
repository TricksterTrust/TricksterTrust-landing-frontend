import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";

import React, {useRef, useState} from "react"
import styles from "./Calculate.module.scss"
import {Pen} from "../../../assets/Pen";

const depositTerm = [
	{
		term: 1,
		time: 'month',
		percent: 4.7
	},
	{
		term: 3,
		time: 'month',
		percent: 7
	},
	{
		term: 6,
		time: 'month',
		percent: 7.39
	},
	{
		term: 1,
		time: 'year',
		percent: 7.69
	},
	{
		term: 2,
		time: 'year',
		percent: 8.17
	},
	{
		max: 'максимальная',
		term: 3,
		time: 'year',
		percent: 9.38
	},
]

// ChartJS.register(ArcElement, Tooltip, Legend);

const Calculate = () => {
	// выбранный срок
	const [term, setTerm] = useState(depositTerm[depositTerm.length - 1])
	// значение инпута
	const [amountValue, setAmountValue] = useState(formatNumber(1500000) + ' ₽')
	
	// добавляет пробел каждым 3-м символам кроме начала и конца
	function formatNumber(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	// убирает пробелы и рубль
	function pureNumber(str) {
		return str.replace(/₽|\s/g, '')
	}
	
	// обновляет инпут
	const betValueInput = (e) => {
		// // Если строка не пустая и нажали на букву, то не изменять
		if (e.target.value === '' || !isNaN(e.target.value[e.target.value.length - 1])) {
			// убирает все пробелы из строки
			let newNum = Number(e.target.value.replace(/\s/g, ""))
			
			// если больше 1000000000, то 1000000000 и в строку, т.к. useState содержит строку
			setAmountValue(String(newNum < 100000000 ? newNum : 100000000))
		}
	}
	
	// высчитывает процент
	const percentageAmount = (num) => {
		return Math.round((term.percent * pureNumber(num)) / 100)
	}
	// получаем процент
	let percentage = percentageAmount(amountValue)
	
	// анимация на кастомный инпут
	const inputRef = useRef()
	const inputParentRef = useRef()
	const customInputClick = (e) => {
		inputRef.current.focus()
		e.currentTarget.style.border = '1px solid #9B95D7'
		
		// при клике преобразовать в число без рубля
		setAmountValue(pureNumber(amountValue))
	}
	// если фокус пропал
	const onBlurCustomInput = () => {
		inputParentRef.current.style.border = '1px solid #E7E8EA'
		
		// добавить рубль если фокус пропал, и не добавлять если уже добавлен
		!amountValue.includes(' ₽') && setAmountValue(formatNumber(amountValue) + ' ₽')
	}
	
	// const data = {
	// 	datasets: [
	// 		{
	// 			data: [percentage, Number(pureNumber(amountValue))],
	// 			backgroundColor: ["rgba(0, 255, 255, 1)", "rgba(255, 0, 255, 1)"],
	// 			borderColor: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"],
	// 			borderWidth: 1
	// 		}
	// 	]
	// };
	return (
		<section className={styles.calculate}>
			<div className={`container ${styles.calculateContainer}`}>
				<h4 className={styles.title}>Рассчитайте доход от вклада</h4>
				<div className={styles.calculateContent}>
					<div className={styles.left}>
						<div>
							<h4>Ставка {term.max} - <span>{term.percent}%</span></h4>
							<span className={styles.explanation}>Ставка рассчитана с учетом надбавок</span>
							<div ref={inputParentRef} onClick={customInputClick} className={styles.customInput}>
								<div className={styles.customInputContainer}>
									<div className={styles.input}>
										<span>Сумма вклада</span>
										<input ref={inputRef} onBlur={onBlurCustomInput} value={formatNumber(amountValue)} onChange={betValueInput} type="text"/>
									</div>
									<Pen/>
								</div>
							</div>
							<div className={styles.fromTo}>
								<span>от 15 000 ₽ </span>
								<span>до 100 000 000 ₽ </span>
							</div>
						</div>
						<div className={styles.term}>
							<h4>Срок вклада</h4>
							<div className={styles.items}>
								{depositTerm.map((item, index) => (
									<span onClick={() => setTerm(item)}
									      style={JSON.stringify(item) === JSON.stringify(term) ? {backgroundColor: '#525970', color: '#fff'} :{}}
									      key={index}
									      className="termItem">{item.term} {item.time === 'month' ? 'мес' : 'год'}
									</span>
								))}
							</div>
						</div>
					</div>
					<div className={styles.right}>
						{/*<div className="pie">*/}
						{/*	<Pie data={data} />*/}
						{/*</div>*/}
						<div className={styles.result}>
							<div className={styles.item}>
								<span>Ставка</span>
								<span>{term.percent}%</span>
							</div>
							<div className={styles.item}>
								<span>Начисленные проценты</span>
								<span>+ {formatNumber(percentage)} ₽</span>
							</div>
							<div className={styles.item}>
								<span>Суммы в конце срока</span>
								<span>+ {formatNumber(percentage + Number(pureNumber(amountValue)))} ₽</span>
							</div>
						</div>
						<div className={`btn ${styles.calculateBtn}`}>Открыть вклад</div>
						<span className={styles.descr}>Расчёт является предварительным</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Calculate;