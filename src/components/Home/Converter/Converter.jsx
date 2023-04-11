import React from "react";
import styles from "./Converter.module.scss"
import {ArrowDown} from "../../../assets/ArrowDown";
import {ArrowsHorison} from "../../../assets/ArrowsHorison";

const Converter = () => {
	return (
		<div className={styles.converter}>
			<div className={styles.content}>
				<h3>Конвертер валют</h3>
				<p>Конвертер по курсу ЦБ на сегодня</p>
				<div className={styles.body}>
					<div className={styles.item}>
						<div className={styles.dropdown}>
							<div className={styles.dropdownSelected}>
								<span>RUB</span>
								<div className={styles.arrow}>
									<ArrowDown/>
								</div>
								<ul style={{display:"none"}} className={styles.dropdownList}>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
						<div className={styles.itemBody}>
							<div className={styles.amount}>5 000 000 000</div>
							<div className={styles.amountTransfer}>1 RUB = 0.0129 USD</div>
						</div>
					</div>
					<div className={styles.arrowsHorison}>
						<ArrowsHorison/>
					</div>
					<div className={styles.item}>
						<div className={styles.dropdown}>
							<div className={styles.dropdownSelected}>
								<span>USD</span>
								<div className={styles.arrow}>
									<ArrowDown/>
								</div>
								<ul style={{display:"none"}} className={styles.dropdownList}>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
						<div className={styles.itemBody}>
							<div className={styles.amount}>64663561.9535</div>
							<div className={styles.amountTransfer}>1 USD = 77.3233 RUB</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Converter;