import React from "react";
import {NavLink} from "react-router-dom";

const Carts = () => {
	return (
		<div className="carts">
			<h3>Карты</h3>
			<div className="items">
				<NavLink to="/debit" className="item">
					<div className="info">
						<h4>Дебетовая карта</h4>
						<p>
							Кэшбэк&nbsp;5% каждый месяц, за&nbsp;переводы с&nbsp;карты на&nbsp;картуTricksterTrust до&nbsp;50&nbsp;тыс ₽&nbsp;в&nbsp;месяц
						</p>
						<a href="" className="btn">Подробнее</a>
					</div>
					<div className="image">
						<img src="../img/assets/card-black.png" alt="дебетовая карта"/>
					</div>
				</NavLink>
				<NavLink to="/credit" className="item">
					<div className="info">
						<h4>Кредитная карта 180 дней без %</h4>
						<p>
							Кешбэк 1&nbsp;000&nbsp;₽ и&nbsp;обслуживание 0&nbsp;₽
						</p>
						<a href="" className="btn">Подробнее</a>
					</div>
					<div className="image">
						<img src="../img/assets/card-white.png" alt="дебетовая карта"/>
					</div>
				</NavLink>
			</div>
		</div>
	)
}

export default Carts;