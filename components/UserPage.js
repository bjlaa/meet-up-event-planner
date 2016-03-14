import React from 'react';
import Footer from '../components/Footer.js';
import Event from '../components/Event.js';

class UserPage extends React.Component {
	render() {
		var userKey = this.props.activeUser.key;
		var events = this.props.events;

		var userListEvents = events.map(function(e) {	
			if (e.creator == userKey) {
				return (
					<Event onClick= {this.props.toggleEvent.bind(this,e.key)} 
							name={e.name} type={e.type} host={e.host} start={e.start}
							end={e.end} guestlist={e.guestlist} location={e.location} 
							message={e.message} key={e.key} />
				)				
			}
		}, this);
		return(
			<div className="page">
				<div className="user-page">
				<p className="user-title">Welcome {this.props.activeUser.name}!</p>
					<button className="button-event" onClick={this.props.toggleCreateEvent}>Create an Event:</button>
					<button className="button-signout" onClick={this.props.signOut} >Sign Out</button>
					<div className="event-list-user">
						<p className="events-title">My Events:</p>
						{userListEvents}
					</div>
				</div>
			</div>
		)
	}
}

export default UserPage;