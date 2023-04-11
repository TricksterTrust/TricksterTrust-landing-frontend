import React from "react";
import styles from  "./BankYear.module.scss"

const BankYear = () => {
	return (
		<div className={styles.bankYear}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.info}>
						<h3>TricksterTrust обладатель пяти наград премии &laquo;Банк года&raquo;</h3>
						<p>
							TricksterTrust был признан лучшим банком во&nbsp;многих категориях: &laquo;Недоговорение года&raquo;, &laquo;Инвестиоцинная компания года&raquo; и&nbsp;тд.. Это всё подтверждает успех нашего успешного банка
						</p>
						<div className="btn">Подробнее</div>
					</div>
					<div className={styles.image}>
						<img src="../img/assets/bank-year.png" alt="Bank year"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BankYear;