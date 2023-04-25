import React from "react"
import styles from "./Hero.module.scss"

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<h3>Доход до 8,6% годовых на сбережения</h3>
				<p>
					Откройте вклад или накопительный счет, получайте доход, накопите на квартиру, отпуск, учебу и другие масштабные цели
				</p>
			</div>
			<div className="btn">Открыть вклад</div>
		</section>
	)
}

export default Hero;