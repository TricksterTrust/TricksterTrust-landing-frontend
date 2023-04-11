import React from "react";
import styles from "./Consultation.module.scss"

const Consultation = () => {
	return (
		<div className={styles.consultation}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4>Не&nbsp;нашли необходимую информацию?</h4>
							<p>Обратитесь к&nbsp;службе поддержки, которая готова помочь вам в&nbsp;любое время</p>
							<div className="btn">Поддержка</div>
						</div>
						<div className={styles.image}>
							<img src="../img/assets/consultation/1.png" alt=""/>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4>Опытный разработчик со&nbsp;стажем?</h4>
							<p>Попробуй себя в&nbsp;команде профессионалов! Тебя здесь ждут!</p>
							<div className="btn">Присоединяйся</div>
						</div>
						<div className={styles.image}>
							<img src="../img/assets/consultation/2.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Consultation;