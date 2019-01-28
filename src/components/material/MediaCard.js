import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function openWindow(url) {
	window.open(url, "_blank");
	// console.log("url: " + url);
}

function MediaCard(props) {
	return (
		<Card className={"card"}>
			<CardMedia
				image={props.img}
				title="Contemplative Reptile"
				className={"media"}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.title}
				</Typography>
				<Typography component="p">
					{props.text}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" size="small" color="primary" onClick={() => openWindow(props.link)}>
					Learn More
				</Button>
				<Button size="small" color="primary">
					Save
				</Button>
			</CardActions>
		</Card>
	);
}

export default MediaCard;