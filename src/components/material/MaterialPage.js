import React from 'react';
import MediaCard from "./MediaCard";
import TextField from '@material-ui/core/TextField';
import './MaterialPage.css';
import Grid from "@material-ui/core/Grid";

class MaterialPage extends React.Component {
	state = {
		firstName: 'Hello, World!',
		lastName: ''
	};

	handleChange = stateField => event => {
		this.setState({
			[stateField]: event.target.value,
		});
	};

	render() {


		return (
			<div id={"material-page-root"}>

				<h1>Cards</h1>

				<p>Material Design cards help display similar but independent pieces of data:</p>

				<Grid container
					  spacing={32}
					  direction="row"
					  justify="center"
					  alignItems="flex-start"
				>
					<Grid item xs={12} sm={6} md={4}>
						<MediaCard
							img={"https://9to5google.com/wp-content/uploads/sites/4/2017/09/google_material-design.jpg?" +
							"quality=82&strip=all&w=1600"}
							title={"Material Design"}
							text={"Material Design by Google is a design system for good user experience. Following " +
							"this system is a great way to make your program easy to use."}
							link={"https://material.io/"}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MediaCard
							img={"https://material-ui.com/static/images/material-ui-logo.svg"}
							title={"Material UI for React"}
							text={"This React library helps you incorporate Material Design into your project. It's " +
							"fast and easy to incorporate into your program."}
							link={"https://material-ui.com/"}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MediaCard
							img={"https://www.w3schools.com/w3css/img_demo_homepage.jpg"}
							title={"W3Schools"}
							text={"To learn basic CSS, W3Schools is a great resource. Their tutorials always include " +
							"examples that you can edit yourself."}
							link={"https://www.w3schools.com/css/"}
						/>
					</Grid>
				</Grid>

				<br />

				<h1>Forms</h1>
				<p>Material Design text fields are a great way to make a
					form easy to read and fill out. Here is an example of such text fields:</p>
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<TextField
						id="outlined-name"
						label="First Name"
						className={"text-input"}
						value={this.state.firstName}
						onChange={this.handleChange('firstName')}
						margin="normal"
						variant="outlined"
					/>

					<TextField
						id="outlined-name"
						label="Last Name"
						className={"text-input"}
						value={this.state.lastName}
						onChange={this.handleChange('lastName')}
						margin="normal"
						variant="outlined"
					/>
				</div>

			</div>
		);
	}
}

export default MaterialPage;