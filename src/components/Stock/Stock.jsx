import React from "react";
import {Cross} from "../../assets/Cross";
import styles from "./Stock.module.scss"

const Stock = ({setStockOpened}) => {
	return (
		<div className={styles.stock}>
			<div className="container">
				<div className={styles.content}>
					<h4>Успейте на открытие и получите год бесплатного обслуживания!</h4>
					<div className={styles.timer}>
						<span>Осталось</span>
						<div className={styles.body}>
							<div className={styles.cells}>
								<div className={styles.cell}>0</div>
								<div className={styles.cell}>5</div>
								<div className={styles.cell}>7</div>
							</div>
							<span>Дней</span>
							<div className={styles.cells}>
								<div className={styles.cell}>1</div>
								<div className={styles.cell}>2</div>
							</div>
							<span className={styles.colon}>:</span>
							<div className={styles.cells}>
								<div className={styles.cell}>4</div>
								<div className={styles.cell}>9</div>
							</div>
							<span className={styles.colon}>:</span>
							<div className={styles.cells}>
								<div className={styles.cell}>3</div>
								<div className={styles.cell}>2</div>
							</div>
						</div>
					</div>
					<div className={styles.btnStock}>Оформить карту</div>
					<div onClick={() => {setStockOpened(false)}} className={styles.close}>
						<Cross/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stock;