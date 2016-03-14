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
		return(	<div className='page'>
				
				<div className='create-event'>
					<button className='create-button' onClick={this.props.goBack}>Cancel</button>
					<p className="create-event-title" >Create an Event:</p>
					<form action="" onSubmit={this.postEvent.bind(this)}>

						<div  className="create-name-event">
							<label htmlFor="name">Name Your Event
								<input  name='name' ref='name' type="text" 
								placeholder='Type in the name of your event' required autofocus/>
							</label>
						</div>

						
						<div className="create-type-event">
							<label htmlFor="type">Type of Event
								<input list="type-event" type="list" name="type" ref='type'/>
								<datalist id="type-event" 
								placeholder="Type in the type of the event" required>
									<option value="Party"></option>
									<option value="Birthday"></option>
									<option value="Conference"></option>
									<option value="Diner"></option>
									<option value="Lunch"></option>
								</datalist>
							</label>
						</div>

						<div className="create-host">
							<label htmlFor="host">Who'll be the host?
								<input name="host" ref='host' type="text" 
								placeholder="Type in the host of the event" required />
							</label>
						</div>
						<div className="createLocationOfEvent">
							<label htmlFor="location">Where will it take place?
								<input name="location" ref='location' type="text" 
								placeholder="Type in the location of your event" />
							</label>
						</div>					
						<div className="create-start">
							<label htmlFor="start">When will it start?
								<input name="start" ref='start' type="datetime-local" />
							</label>
						</div>

						<div className="createEndEvent">
							<label htmlFor="end">And finish?
								<input name="end" ref='end' type="datetime-local" />
							</label>
						</div>

						<div className="create-guestlist">
							<label htmlFor="guestlist">Who's on the guestlist?
								<input name="guestlist" ref='guestlist' type="text" 
								placeholder="Type in the person you'd like to invite" />
							</label>
						</div>

						<div className="create-message">
							<label htmlFor="message">
								<p className="message-title">Presentation message:</p>
								<textarea name="message" ref="message" id="" 
								cols="30" rows="10" placeholder="Optional message to the 
								guests with additional info about the event">
								</textarea>
							</label>
						</div>

						
						<input className="submit-button" type="submit" value="Create Your Event"/>
					</form>
					
				</div>
			</div>

				)
	}
}

export default CreateEvent;