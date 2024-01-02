import React from "react"
import image from "../images/group.png"

export default function MainContent() {
	return (
		<div className="main--container">
			<img src={image} className="main--img"/>
			<h1>Online Experiences</h1>
			<p>
				Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
			</p>
		</div>
	)
}