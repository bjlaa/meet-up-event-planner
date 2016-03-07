import React from 'react';

class Event extends React.Component {
	render() {
		return(
			<div className="event">
				<div className="name-event">{this.props.name}</div>
				<div className="host-event">Host: {this.props.host}</div>
				<div className="location-event">Location: {this.props.location}</div>
				{/*
				<div className="type-event">{this.props.type}</div>
				<div className="start-event">{this.props.start}</div>
				<div className="end-event">{this.props.end}</div>
				<div className="guestlist-event">{this.props.guestlist}</div>
				<div className="text-event">{this.props.text}</div>*/}
			</div>
		)
	}
}

export default Event;