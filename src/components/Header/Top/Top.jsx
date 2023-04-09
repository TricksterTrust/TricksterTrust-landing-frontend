import React from "react";
import styles from "./Top.module.scss";
import {Logo} from "../../../assets/Logo";
import {Login} from "../../../assets/Login";
import {Burger} from "../../../assets/Burger";

const Top = () => {
	return (
		<div className={styles.top}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.logo}>
						<Logo/>
						<h4>TricksterTrust</h4>
					</div>
					<nav>
						<ul className={styles.list}>
							<li><a href="" className={styles.link}>Частным клиентам</a></li>
							<li><a href="" className={styles.link}>Самозанятым</a></li>
							<li><a href="" className={styles.link}>Малому бизнесу и ИП</a></li>
							<li><a href="" className={styles.link}>Корпорациям</a></li>
						</ul>
					</nav>
					<div className={styles.login}>
						<span>войти</span>
						<Login/>
					</div>
					<Burger/>
				</div>
			</div>
		</div>
	)
}

export default Top;