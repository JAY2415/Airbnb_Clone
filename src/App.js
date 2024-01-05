import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Card from "./components/Card"
import data from "./data"


export default function App() {

	const cards = data.map(item => {
		return (
			<Card      
        		img={item.coverImg}
				rating={item.stats.rating}      
				reviewCount={item.stats.reviewCount}     
				country={item.location}      
				title={item.title}
        		price={item.price}
			/>
		)
	})


	return (

		<div>
			<NavBar />
			<MainContent />
			{cards}
		</div>

	)

}