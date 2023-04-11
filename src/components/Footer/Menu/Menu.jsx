import React from "react";
import styles from "../Footer.module.scss";

const Menu = ({styles}) => {
	return (
		<nav className={styles.menu}>
			<div className="container">
				<div className={styles.menuContent}>
					<ul className={styles.list}>
						<li><a href="" className={styles.link}>Кредитные карты</a></li>
						<li><a href="" className={styles.link}>Потребительские кредиты</a></li>
						<li><a href="" className={styles.link}>Вклады</a></li>
					</ul>
					<ul className={styles.list}>
						<li><a href="" className={styles.link}>Дебетовые карты</a></li>
						<li><a href="" className={styles.link}>Ипотека для IT-специалистов</a></li>
						<li><a href="" className={styles.link}>Карта UnionPay</a></li>
					</ul>
					<ul className={styles.list}>
						<li><a href="" className={styles.link}>Кредит наличными</a></li>
						<li><a href="" className={styles.link}>Ипотека</a></li>
						<li><a href="" className={styles.link}>Про финансы</a></li>
					</ul>
					<ul className={styles.list}>
						<li><a href="" className={styles.link}>Премиум</a></li>
						<li><a href="" className={styles.link}>Ипотечный калькулятор</a></li>
						<li><a href="" className={styles.link}>Кредитный калькулятор</a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Menu;