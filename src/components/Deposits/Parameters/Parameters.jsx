import React from "react"
import styles from "./Parameters.module.scss"

const Parameters = () => {
	return (
		<section className={styles.parameters}>
			<div className="container">
				<div className="form">
					<div className="formContainer">
						<div className="formContent">
							<h3>Выберите параметры вклада</h3>
							<div className={styles.term}>
								<h4>3 месяца</h4>
								<div className={styles.items}>
									<span className="termItem">1 мес</span>
									<span className="termItem">3 мес</span>
									<span className="termItem">6 мес</span>
									<span className="termItem">1 год</span>
									<span className="termItem">2 года</span>
									<span className="termItem">3 года</span>
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