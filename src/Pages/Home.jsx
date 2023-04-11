import React from "react";
import Hero from "../components/Home/Hero/Hero";
import Banners from "../components/Home/Banners/Banners";
import Search from "../components/Home/Search/Search";
import BankYear from "../components/Home/BankYear/BankYear";
import Converter from "../components/Home/Converter/Converter";
import Consultation from "../components/Home/Consultation/Consultation";

const Home = () => {
	return (
		<main className="page">
			<Hero/>
			<Banners/>
			<Search/>
			<BankYear/>
			<Converter/>
			<Consultation/>
		</main>
	)
}

export default Home;