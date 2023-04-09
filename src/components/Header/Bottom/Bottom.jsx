import React from "react";

import styles from "./Bottom.module.scss"

import {Headphones} from "../../../assets/Headphones";

const Bottom = () => {
	return (
		<div className={styles.bottom}>
			<div className="container">
				<nav className={styles.menu}>
					<ul className={styles.list}>
						<li><a href="" className={styles.link}>Карты</a></li>
						<li><a href="" className={styles.link}>Вклады</a></li>
						<li><a href="" className={styles.link}>Ипотека</a></li>
						<li><a href="" className={styles.link}>Инвестиции</a></li>
						<li><a href="" className={styles.link}>Курс валют</a></li>
						<li><a href="" className={styles.link}>Премиум</a></li>
					</ul>
					<div className={styles.management}>
						<div className={styles.btn}>Стать клиентом</div>
						<div className={styles.support}>
							<Headphones/>
							<span>Поддержка</span>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Bottom;