import React from "react";
import styles from "./Top.module.scss";
import {Logo} from "../../../assets/Logo";
import {Login} from "../../../assets/Login";
import {Burger} from "../../../assets/Burger";
import {NavLink} from "react-router-dom";

const Top = () => {
	return (
		<div className={styles.top}>
			<div className="container">
				<div className={styles.content}>
					<NavLink to="/" className={styles.logo}>
						<Logo/>
						<h4>TricksterTrust</h4>
					</NavLink>
					<nav>
						<ul className={styles.list}>
							<li><NavLink to="" className={styles.link}>Частным клиентам</NavLink></li>
							<li><NavLink to="" className={styles.link}>Самозанятым</NavLink></li>
							<li><NavLink to="" className={styles.link}>Малому бизнесу и ИП</NavLink></li>
							<li><NavLink to="" className={styles.link}>Корпорациям</NavLink></li>
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