import React from 'react';
import MediaCard from "./MediaCard";
import './MediaCard.css';

function MaterialPage(props) {
	return (
		<div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
			<MediaCard
				img={"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}
				title={"Lizard"}
				text={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across " +
				"all continents except Antarctica"}
				link={"https://en.wikipedia.org/wiki/Lizard"}
			/>
			<MediaCard
				img={"https://material-ui.com/static/images/material-ui-logo.svg"}
				title={"Material UI for React"}
				text={"Material Design by Google is a design system for good user experience. This React library helps you incorporate it into your project."}
				link={"https://material-ui.com/"}
			/>
			<MediaCard
				img={"https://material-ui.com/static/images/material-ui-logo.svg"}
				title={"Material UI for React"}
				text={"Material Design by Google is a design system for good user experience. This React library helps you incorporate it into your project."}
				link={"https://material-ui.com/"}
			/>
		</div>
	);
}

export default MaterialPage;