import React from "react"


import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"

import Card from "./components/Card"



export default function App() {

	return (

		<div>
			<NavBar />
			<MainContent />
			<Card 
                
				img="image_12"
                
				rating="5.0"
                
				reviewCount={6}
                
				country="USA"
                
				title="Life Lessons with Katie Zaferes"

		                price={136}
			/>
		</div>

	)

}