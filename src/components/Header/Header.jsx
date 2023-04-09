import React from "react";

import styles from "./Header.module.scss"

import Top from "./Top/Top";
import {Headphones} from "../../assets/Headphones";
import Bottom from "./Bottom/Bottom";

const Header = () => {
	return (
		<header className="header">
			<Top/>
			<Bottom/>
		</header>
	)
}

export default Header;