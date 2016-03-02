import React from 'react';
import {Link} from 'react-router';
import Footer from '../components/Footer.js';

class Homepage extends React.Component {
	render() {
		return(
			<div className="page">
				<div className="home">
					<h1>Meet-Up Event </h1>
					<h2>Create and manage all your big events!</h2>
					<Link to="/login">
						<button className="login">Login</button>
					</Link>
					<Link to="/createaccount">
						<button className="signin">Sign In</button>
					</Link>
					<div className="event-list-all">

					</div>
				</div>
				<footer>Coded by Benjamin</footer>
			</div>
		)
	}
}


export default Homepage;