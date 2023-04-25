import React from "react"
import styles from "./Calculate.module.scss"
import {Pen} from "../../../assets/Pen";

const Calculate = () => {
	return (
		<section className={styles.calculate}>
			<div className={`container ${styles.calculateContainer}`}>
				<h4 className={styles.title}>Рассчитайте доход от вклада</h4>
				<div className={styles.calculateContent}>
					<div className={styles.left}>
						<div>
							<h4>Ставка максимальная - <span>8,64%</span></h4>
							<span className={styles.explanation}>Ставка рассчитана с учетом надбавок</span>
							<div className={styles.customInput}>
								<div className={styles.input}>
									<span>Сумма вклада</span>
									<input placeholder="1 500 000 ₽" type="text"/>
								</div>
								<Pen/>
							</div>
							<div className={styles.fromTo}>
								<span>от 15 000 ₽ </span>
								<span>до 100 000 000 ₽ </span>
							</div>
						</div>
						<div className={styles.term}>
							<h4>Срок вклада</h4>
							<div className={styles.items}>
								<span className="termItem">1 мес</span>
								<span className="termItem">3 мес</span>
								<span className="termItem">6 мес</span>
								<span className="termItem">1 год</span>
								<span className="termItem">2 года</span>
								<span className="termItem">3 года</span>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.result}>
							<div className={styles.item}>
								<span>Ставка</span>
								<span>8,64%</span>
							</div>
							<div className={styles.item}>
								<span>Начисленные проценты</span>
								<span>+ 386 100 ₽</span>
							</div>
							<div className={styles.item}>
								<span>Суммы в конце срока</span>
								<span>+ 1 886 100 ₽</span>
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