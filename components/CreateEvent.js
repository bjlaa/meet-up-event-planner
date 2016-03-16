import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';

class CreateEvent extends React.Component {
	componentDidMount() {
		this.refs.name.focus();
	}
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
	validateInput(e) {
		var element ="error"+e.target.name;
		if(e.target.value == "") {
			this.refs[element].style.visibility = "visible";
		} else {
			this.refs[element].style.visibility = "hidden";
		}	
	}
	render() {
		return(	<div className='page'>
				<button className='create-button' onClick={this.props.goBack}>Cancel</button>
				<div className='create-event'>
					
					<p className="create-event-title" >Create an Event:</p>
					<form action="" onSubmit={this.postEvent.bind(this)}>

						<div  className="create-name-event">
							<label htmlFor="name">Name Your Event*
								<input  name='name' ref='name' type="text" 
								placeholder='Type in the name of your event' required autofocus
								onBlur={this.validateInput.bind(this)} />
								<p ref="errorname" className="error-message">Field is required.</p>
							</label>
						</div>

						
						<div className="create-type-event">
							<label htmlFor="type">Type of Event*
								<input list="type-event" type="list" name="type" ref='type' required 
								onBlur={this.validateInput.bind(this)}
								placeholder="Type in the type of the event" />
								<datalist id="type-event" 
								 required>
									<option value="Party"></option>
									<option value="Birthday"></option>
									<option value="Conference"></option>
									<option value="Diner"></option>
									<option value="Lunch"></option>
								</datalist>
								<p ref="errortype" className="error-message">Field is required.</p>
							</label>
						</div>

						<div className="create-host">
							<label htmlFor="host">Who'll be the host?*
								<input name="host" ref='host' type="text" 
								placeholder="Type in the host of the event" required 
								onBlur={this.validateInput.bind(this)} />
								<p ref="errorhost" className="error-message">Field is required.</p>
							</label>
						</div>
						<div className="createLocationOfEvent">
							<label htmlFor="location">Where will it take place?*
								<input name="location" ref='location' type="text" 
								placeholder="Type in the location of your event" required 
								onBlur={this.validateInput.bind(this)} />
								<p ref="errorlocation" className="error-message">Field is required.</p>
							</label>
						</div>					
						<div className="create-start">
							<label htmlFor="start">When will it start?*
								<input name="start" ref='start' type="datetime-local" required
								onBlur={this.validateInput.bind(this)} />
								<p ref="errorstart" className="error-message">Field is required.</p>
							</label>
						</div>

						<div className="createEndEvent">
							<label htmlFor="end">And finish?*
								<input name="end" ref='end' type="datetime-local" required
								onBlur={this.validateInput.bind(this)} />
								<p ref="errorend" className="error-message">Field is required.</p>
							</label>
						</div>

						<div className="create-guestlist">
							<label htmlFor="guestlist">Who's on the guestlist?*
								<input name="guestlist" ref='guestlist' type="text" 
								placeholder="Persons you'd like to invite" 
								onBlur={this.validateInput.bind(this)} required />
								<p ref="errorguestlist" className="error-message">Field is required.</p>
							</label>
						</div>

						<div className="create-message">
							<label htmlFor="message">
								<p className="message-title">Let your guests know a bit more about your event*</p>
								<textarea name="message" ref="message" id="" 
								cols="30" rows="10" placeholder="Optional message to the 
								guests with additional info about the event...">
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