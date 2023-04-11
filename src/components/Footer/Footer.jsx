import React from "react";
import styles from "./Footer.module.scss"
import Top from "./Top/Top";
import Menu from "./Menu/Menu";
import Bottom from "./Bottom/Bottom";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Top styles={styles}/>
			<Menu styles={styles}/>
			<Bottom styles={styles}/>
		</footer>
	)
}

export default Footer;