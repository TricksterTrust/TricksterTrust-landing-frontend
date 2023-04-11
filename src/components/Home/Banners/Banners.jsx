import React from "react";
import styles from "./Banners.module.scss"

const Banners = () => {
	return (
		<div className={styles.banners}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.banner}>
						<div className={styles.info}>
							<div className={styles.tag}>Карты</div>
							<h4>Кредитная карта 180 дней без&nbsp;%</h4>
							<p>Кешбэк 1&nbsp;000&nbsp;₽ и&nbsp;обслуживание 0&nbsp;₽</p>
						</div>
						<div className={styles.image}>
							<img src="../img/assets/banners/carts.png" alt="cards"/>
						</div>
					</div>
					<div className={styles.banner}>
						<div className={styles.info}>
							<div className={styles.tag}>Калькулятор</div>
							<h4>Купите или продайте валюту</h4>
							<p>Узнайте сегодняшние курсы валют и&nbsp;посчитайте сумму обмена</p>
						</div>
						<div className={styles.image}>
							<img src="../img/assets/banners/calculator.png" alt="calculator"/>
						</div>
					</div>
					<div className={styles.banner}>
						<div className={styles.info}>
							<div className={styles.tag}>Отзывы</div>
							<h4>TrickserTrust вопросы и&nbsp;отзывы</h4>
							<p>Выбирайте продукты TricksterTrust на&nbsp;основе реальных отзывов</p>
						</div>
						<div className={styles.image}>
							<img src="../img/assets/banners/reviews.png" alt="reviews"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banners;