import React, {useEffect, useState} from "react";
import styles from "./Converter.module.scss"
import {ArrowsHorison} from "../../../assets/ArrowsHorison";
import Item from "./Item/Item";
import axios from "axios";

const Converter = () => {
	// массив с бэка
	const [currencyRates, setCurrencyRates] = useState([])
	
	const [fromCurrency, setFromCurrency] = useState('RUB')
	const [toCurrency, setToCurrency] = useState('USD')
	
	const [fromPrice, setFromPrice] = useState(0)
	const [toPrice, setToPrice] = useState(0)
	
	// получаю данные с бэка в currencyRates
	useEffect(() => {
		(async function() {
			try {
				await axios.get('https://api.trickstertrust.ru/v1/currencies/currency_rates/')
					.then(resp => {
						setCurrencyRates(resp.data)
					})
			}
			catch (error) {
				console.log(error)
			}
		})()
	}, [])
	
	// изменяет валюту
	const resultValue = (toCode, fromCode, value, setPrice) => {
		if (value >= 1 && value < 1000000) {
			const data = new FormData();
			data.append('to_code', toCode);
			data.append('from_code', fromCode);
			data.append('value', value);
			
			axios.post('https://api.trickstertrust.ru/v1/currencies/exchange/', data)
				.then(resp => setPrice(resp.data.value.toFixed(resp.data.value >= 0.99 ? 2 : 6)))
				.catch(error => console.log(error));
		}
	}
	
	// изменяет значение в 1-м инпуте
	const onChangeFromPrice = (value) => {
		// Если одинаковые коды валют, то одинаковые значения, иначе resultValue
		fromCurrency === toCurrency ? setToPrice(value) : resultValue(fromCurrency, toCurrency, value, setToPrice)
		setFromPrice(value)
	}
	
	// изменяет значение во 2-м инпуте
	const onChangeToPrice = (value) => {
		// Если одинаковые коды валют, то одинаковые значения, иначе resultValue
		fromCurrency === toCurrency ? setFromPrice(value) : resultValue(toCurrency, fromCurrency, value, setFromPrice)
		setToPrice(value)
	}
	
	// изменяет значение в 1-м инпуте, при изменении валюты 1-го списка
	useEffect(() => {
		onChangeFromPrice(fromPrice)
	}, [fromCurrency])
	// изменяет значение во в 2-м инпуте, при изменении валюты 2-го списка
	useEffect(() => {
		onChangeToPrice(toPrice)
	}, [toCurrency])
	
	
	
	// Поменять местами
	const rearrangeCurrency = () => {
		const fromC = fromCurrency;
		const toC = toCurrency;

		const fromP = fromPrice;
		const toP = toPrice;

		setFromCurrency(toC)
		setToCurrency(fromC)

		setFromPrice(toP)
		setToPrice(fromP)
	}
	
	return (
		<div className={styles.converter}>
			<div className={styles.content}>
				<h3>Конвертер валют</h3>
				<p>Конвертер по курсу ЦБ на сегодня</p>
				{
					currencyRates.length > 0 &&
					<div className={styles.body}>
						<Item value={fromPrice}
						      currency={fromCurrency}
						      onChangeCurrency={setFromCurrency}
						      onChangeValue={onChangeFromPrice}
						      resultValue={resultValue}
						      currencyRates={currencyRates}
						/>
						<div onClick={rearrangeCurrency} className={styles.arrowsHorison}>
							<ArrowsHorison/>
						</div>
						<Item value={toPrice}
						      currency={toCurrency}
						      onChangeCurrency={setToCurrency}
						      onChangeValue={onChangeToPrice}
						      resultValue={resultValue}
						      currencyRates={currencyRates}
						/>
					</div>
				}
			</div>
		</div>
	)
}

export default Converter;