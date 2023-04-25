import React from "react"
import styles from "./Advantages.module.scss"

const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<div className="container">
				<h4>Преимущества вклада</h4>
				<div className={styles.items}>
					<div className={styles.item}>
						<h5>до 8,6%</h5>
						<p>максимальная ставка</p>
					</div>
					<div className={styles.item}>
						<h5>15 000 ₽</h5>
						<p>
							минимальная сумма при открытии в интернет-банке, 100 000 ₽ при открытии в офисе
						</p>
					</div>
					<div className={styles.item}>
						<h5>1 месяц</h5>
						<p>минимальный срок</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages;