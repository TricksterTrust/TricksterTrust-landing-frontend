import React from "react";
import styles from "./Hero.module.scss"

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.info}>
						<h1>Дебетовая карта, которую вы&nbsp;бы точно хотели получить</h1>
						<p>Кэшбэк&nbsp;5% каждый месяц, за&nbsp;переводы с&nbsp;карты на&nbsp;картуTricksterTrust до&nbsp;50&nbsp;тыс ₽&nbsp;в&nbsp;месяц</p>
						<div className={styles.btn}>Оформить карту</div>
					</div>
					<div className={styles.image}>
						<img src="../img/assets/card-black.png" alt="card black"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero;