import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';

class CreateAccount extends React.Component {
	render() {
		return(
			<div className="page">
				<Backbutton />
				<div className="create-account">
					<p>Create an Account:</p>
					<form action="">
						<input className="create-name" type="text" name="fullname" placeholder="Type in your full name" required />
						<input className="create-email" type="text" name="email" placeholder="Type in your email" required/>
						<input className="create-password" type="text" name="password" placeholder="Type in your password" required/>
						<input className="create-birthdate" type="date" name="birthdate" />
					</form>
				</div>
				<Footer />			
			</div>
		)
	}
}

export default CreateAccount;