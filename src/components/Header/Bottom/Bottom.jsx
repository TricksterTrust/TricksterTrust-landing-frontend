import React from "react";

import styles from "./Bottom.module.scss"

import {Headphones} from "../../../assets/Headphones";
import {NavLink} from "react-router-dom";

const Bottom = () => {
	return (
		<div className={styles.bottom}>
			<div className="container">
				<nav className={styles.menu}>
					<ul className={styles.list}>
						<li><NavLink to="/carts" className={styles.link}>Карты</NavLink></li>
						<li><NavLink to="/deposits" className={styles.link}>Вклад</NavLink></li>
						<li><NavLink to="" className={styles.link}>Ипотека</NavLink></li>
						<li><NavLink to="" className={styles.link}>Инвестиции</NavLink></li>
						<li><NavLink to="" className={styles.link}>Курс валют</NavLink></li>
						<li><NavLink to="" className={styles.link}>Премиум</NavLink></li>
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