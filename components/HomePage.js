import React from 'react';
import Footer from '../components/Footer.js';

class Homepage extends React.Component {

	render() {
		return(
			<div className="page">
				<div className="home">
					<p className="home-title">Meet-Up Event Planner</p>
					<div className="line-title"></div>
					<p className="home-sub">Create and manage all your big events!</p>
					<button className="login" onClick={this.props.toggleUserLogin}>LOGIN</button>
					<button className="signin" onClick={this.props.toggleCreateAccount}>SIGN IN</button>
					<button className="guest" onClick={this.props.toggleUserPage}>TRY OUR APP AS A GUEST</button>			
					<div className="event-list-all">A huge list of events</div>
				</div>
				
				<footer>Coded by Benjamin</footer>
			</div>
		)
	}
}


export default Homepage;