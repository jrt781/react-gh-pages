import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<nav>
					<Link to="/" activeClassName="active">Home</Link>
					{" | "}
					<Link to="/about" activeClassName="active">About</Link>
				</nav>
			</div>
		);
	}
}

export default App;
