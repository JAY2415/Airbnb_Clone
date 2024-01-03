import React from "react"
import image from "../images/image_12.png"
import star from "../images/star.png"

export default function Card() {
	return (
		<div className="card">
			<img src={image} className="card--img" />
			<div className="card--stats">
				<img src={star} className="card--star"/>
				<span>5.0</span>
				<span className="gray">(6)</span>
				<span className="gray">USA</span>
			</div>
			<p>Life Lessons with Katie Zaferes</p>
			<p><>span className="bold" >From $136</span> / person</p>
		</div>
	)
}