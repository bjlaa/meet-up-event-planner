import React from 'react';
import {Link} from 'react-router';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';

class CreateEvent extends React.Component {
	render() {
		return(
			<div className='page'>
				<Backbutton />
				<div className='create-event'>
					<p>Create an Event:</p>
					<form action="">
						<input name='name' type="text" placeholder='Type in the name of your event' required/>
						<br/>
						<input name="type" type="text" placeholder="Type in the type of the event" required />
						<br/>
						<input name="host" type="text" placeholder="Type in the host of the event" required />
						<br/>
						<input name="start" type="datetime" required />
						<br/>
						<input name="end" type="datetime" required />
						<br/>
						<input name="guestlist" type="text" placeholder="Type in the person you'd like to invite" />
						<br/>
						<input name="location" type="text" placeholder="Type in the location of your event" />
						<br/>
						<textarea name="message" id="" cols="30" rows="10" placeholder="Optional message to the guests with additional info about the event"></textarea>
					</form>
				</div>
			</div>
		)
	}
}

export default CreateEvent;