import React, {useState} from "react"
import styles from "./Parameters.module.scss"

const parameters = [
	{quantity: 1, time: 'мес'},
	{quantity: 3, time: 'мес'},
	{quantity: 6, time: 'мес'},
	{quantity: 1, time: 'год'},
	{quantity: 2, time: 'года'},
	{quantity: 3, time: 'года'}
]

const Parameters = () => {
	const [parameter, setParameters] = useState({quantity: 3, time: 'мес'})
	
	const onClickTerm = (parameter) => {
		setParameters(parameter)
	}
	
	function declOfNum(number, words) {
		return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
	}
	
	return (
		<section className={styles.parameters}>
			<div className="container">
				<div className="form">
					<div className="formContainer">
						<div className="formContent">
							<h3>Выберите параметры вклада</h3>
							<div className={styles.term}>
								<h4>{parameter.quantity} {parameter.time === 'мес' ?
									declOfNum(parameter.quantity, ['месяц', 'месяца', 'месяцев'])
									:
									declOfNum(parameter.quantity, ['год', 'года', 'лет'])}
								</h4>
								<div className={styles.items}>
									{parameters.map((el, id) => (
										<span style={parameter.time === el.time && parameter.quantity === el.quantity ? {backgroundColor: '#525970', color: '#fff'} : {}}
										      key={id}
										      onClick={() => onClickTerm(el)}
										      className="termItem">
											{`${el.quantity} ${el.time}`}
										</span>
									))}
								</div>
							</div>
							<form action="">
								<div className="top">
									<input placeholder="Фамилия, имя и отчество*" type="text"/>
									<div className="row">
										<input placeholder="Мобильный телефон*" type="text"/>
										<input placeholder="Электронная почта" type="text"/>
									</div>
									<input placeholder="Дата рождения*" type="text"/>
								</div>
								<div className="bottom">
									<p className="confidentiality">
										Заполняя форму, я принимаю <span>условия передачи информации</span>
									</p>
									<button className="btn formBtn">Оформить</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Parameters;