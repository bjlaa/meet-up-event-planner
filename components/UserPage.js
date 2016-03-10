import React from 'react';
import Footer from '../components/Footer.js';

class UserHomePage extends React.Component {
	render() {
		return(
			<div className="page">
				<div className="user-home">
					<button onClick={this.props.toggleCreateEvent}>Create an Event:</button>
					<button onClick={this.props.signOut} >Sign Out</button>
					<div className="event-list-user">

					</div>
				</div>
			</div>
		)
	}
}

export default UserHomePage;