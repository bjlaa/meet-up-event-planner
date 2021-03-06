import React from 'react';
import Footer from '../components/Footer.js';
import Event from '../components/Event.js';

class Homepage extends React.Component {

	render() {
		
		var listEvents = this.props.events.map(function(e) {		
			return (
				<div key={e.key}>
					<Event
							name={e.name} type={e.type} host={e.host} start={e.start}
							end={e.end} guestlist={e.guestlist} location={e.location} 
							message={e.message} />
				</div>

			)
		});

		return(
			<div className="page">
				<div className="home">
					<p className="home-title">Meet-Up Event Planner</p>
					<div className="line-title"></div>
					<p className="home-sub">Create and manage all your big events!</p>
					<button className="login" onClick={this.props.toggleUserLogin}>LOGIN</button>
					<button className="signin" onClick={this.props.toggleCreateAccount}>SIGN IN</button>
					<button className="guest" onClick={this.props.toggleUserPage.bind(this, this.props.users[0])}>TRY OUR APP AS A GUEST</button>
					<div className="list-events">
						{listEvents}
					</div>
								
				</div> 	
				<footer>Coded by Benjamin</footer>
			</div>
		)
	}
}


export default Homepage;