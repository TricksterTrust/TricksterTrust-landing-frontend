import React, {useEffect, useState} from "react";
import styles from "./Item.module.scss";
import DropDown from "../DropDown/DropDown";

const Item = ({value, currency, onChangeCurrency, onChangeValue, resultValue, currencyRates}) => {
	// для подсказки снизу
	const [fromToCurrency, setFromToCurrency] = useState(1)
	// срабатывает при изменение валюты
	useEffect(() => {
		currency === 'USD' ? setFromToCurrency(1) : resultValue(currency, 'USD', 1, setFromToCurrency)
	}, [currency])
	
	return (
		<div className={styles.item}>
			<DropDown currencyRates={currencyRates} onChangeCurrency={onChangeCurrency} currency={currency}/>
			<div className={styles.itemBody}>
				<input value={value} onChange={(e) => onChangeValue(e.target.value.replace(/^0+/, ''))} type="number" className={styles.amount}
				/>
				<div className={styles.amountTransfer}>1 {currency} = {fromToCurrency} USD</div>
			</div>
		</div>
	)
}

export default Item;