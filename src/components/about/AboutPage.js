// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>This application uses React, React Router, and a variety of other helpful libraries.</p>
				<p>Check out the GitHub repository to look at the code and see some helpful instructions</p>
			</div>
		);
	}
}

export default AboutPage;