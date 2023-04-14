import React from "react";
import styles from "./DropDown.module.scss";
import {ArrowUp} from "../../../../assets/ArrowUp";
import {ArrowDown} from "../../../../assets/ArrowDown";
import {useState} from "react";

const DropDown = ({currency, onChangeCurrency, currencyRates}) => {
	const [opened, setOpened] = useState(false)
	
	const clickItemList = (item) => {
		onChangeCurrency(item.code)
		setOpened(false)
	}
	
	return (
		<div className={styles.dropdown}>
			<div onClick={() => {setOpened(!opened)}} className={styles.dropdownSelected}>
				<span>{currency.toUpperCase()}</span>
				<div className={styles.arrow}>
					{opened ? <ArrowUp/> : <ArrowDown/>}
				</div>
			</div>
			{opened &&
				<ul className={styles.dropdownList}>
					{currencyRates.map((item, index) => (
						<li onClick={() => clickItemList(item)} key={index}>{String(item.code).toUpperCase()}</li>
					))}
				</ul>
			}
		</div>
	)
}

export default DropDown;