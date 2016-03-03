import React from 'react';
import Footer from '../components/Footer.js';

class Homepage extends React.Component {
	render() {
		return(
			<div className="page">
				<div className="home">
					<h1>Meet-Up Event </h1>
					<h2>Create and manage all your big events!</h2>
						<button className="login">Login</button>
						<button className="signin">Sign In</button>
						<button className="guest">Try our App as a Guest</button>			
					<div className="event-list-all"></div>
				</div>
				<footer>Coded by Benjamin</footer>
			</div>
		)
	}
}


export default Homepage;