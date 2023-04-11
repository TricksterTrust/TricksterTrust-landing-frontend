import React from "react";
import styles from "../Footer.module.scss";
import {Logo} from "../../../assets/Logo";

const Top = ({styles}) => {
	return (
		<div className={styles.top}>
			<div className="container">
				<div className={styles.topContent}>
					<div className={styles.topLogo}>
						<Logo/>
						<h4>TricksterTrust</h4>
					</div>
					<div className={styles.topContacts}>
						<a href="tel:+78005778893">8&nbsp;800 577-88-93</a>
						<span>Для звонков по россии</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Top