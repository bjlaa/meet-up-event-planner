import React from 'react';

class Event extends React.Component {
	render() {
		return(
			<div className="event">
				<div ref="name-event" className="name-event">{this.props.name}</div>
				<div ref="host-event" className="host-event">Host: {this.props.host}</div>
				<div className="type-event">Type: {this.props.type}</div>
				<div ref="location-event" className="location-event">Location: {this.props.location}</div>			
				<div className="start-event">Start: {this.props.start}</div>
				<div className="end-event">End: {this.props.end}</div>
				<div className="guestlist-event">Guestlist: {this.props.guestlist}</div>
				<div className="message-event">{this.props.message}</div>
			</div>
		)
	}
}

export default Event;