import React from "react";
import Hero from "../components/Deposits/Hero/Hero";
import Advantages from "../components/Deposits/Advantages/Advantages";
import Calculate from "../components/Deposits/Calculate/Calculate";
import Parameters from "../components/Deposits/Parameters/Parameters";

const Deposits = () => {
	return (
		<main className="page deposits">
			<Hero/>
			<Advantages/>
			<Calculate/>
			<Parameters/>
		</main>
	)
}

export default Deposits;