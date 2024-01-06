import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Card from "./components/Card"
import data from "./data"


export default function App() {

	const cards = data.map(item => {
		return (
			<Card
				item={item}
			/>
		)
	})


	return (

		<div>
			<NavBar />
			<MainContent />
			<section className="card--list">
				{cards}
			</section>
		</div>

	)

}