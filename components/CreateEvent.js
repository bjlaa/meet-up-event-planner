import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';

class CreateEvent extends React.Component {
	postEvent(e) {
		e.preventDefault();
		var timestamp = (new Date()).getTime();
		var newEvent = {
			name: this.refs.name.value,
			type: this.refs.type.value,
			host: this.refs.host.value,
			start: this.refs.start.value,
			end: this.refs.end.value,
			guestlist: this.refs.guestlist.value,
			location: this.refs.location.value,
			message: this.refs.message.value,
			key: timestamp,
			creator: this.props.activeUser.key
		}
		this.props.addEvent(newEvent);
	}
	render() {
		return(
			<div className='page'>
				<Backbutton toggleHomePage={this.props.toggleHomePage} />
				<div className='create-event'>
					<p>Create an Event:</p>
					<form action="" onSubmit={this.postEvent.bind(this)}>
						<input name='name' ref='name' type="text" placeholder='Type in the name of your event' required/>
						<br/>
						<input name="type" ref='type' type="text" placeholder="Type in the type of the event" required />
						<br/>
						<input name="host" ref='host' type="text" placeholder="Type in the host of the event" required />
						<br/>
						<input name="start" ref='start' type="datetime" required />
						<br/>
						<input name="end" ref='end' type="datetime" required />
						<br/>
						<input name="guestlist" ref='guestlist' type="text" placeholder="Type in the person you'd like to invite" />
						<br/>
						<input name="location" ref='location' type="text" placeholder="Type in the location of your event" />
						<br/>
						<textarea name="message" ref="message" id="" cols="30" rows="10" placeholder="Optional message to the guests with additional info about the event"></textarea>
						<input type="submit" value="Create Your Event"/>
					</form>
				</div>
			</div>
		)
	}
}

export default CreateEvent;