import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';

class CreateAccount extends React.Component {
	postUser(e) {
		e.preventDefault();
		var timestamp = (new Date()).getTime();
		var newUser = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.email.value,
			bithdate: this.refs.birthdate.value,
			key: timestamp
		}
		this.props.addUser(newUser);
	}
	render() {
		return(
			<div className="page">
				<Backbutton toggleHomePage={this.props.toggleHomePage}/>
				<div className="create-account">
					<p>Create an Account:</p>
					<form action="" onSubmit={this.postUser.bind(this)}>
						<input ref="name" className="create-name" type="text" name="fullname" placeholder="Type in your full name" required />
						<input ref="email" className="create-email" type="text" name="email" placeholder="Type in your email" required/>
						<input ref="password" className="create-password" type="text" name="password" placeholder="Type in your password" required/>
						<input ref="birthdate" className="create-birthdate" type="date" name="birthdate" />
						<input type="submit" value="Create User Account" />
					</form>
				</div>
				<Footer />			
			</div>
		)
	}
}

export default CreateAccount;