import React from "react";
import Card from "../components/Card/Card";

const Credit = ({card}) => {
	return (
		<main className="page">
			<div className="container">
				<Card card={card}/>
			</div>
		</main>
	)
}

export default Credit;