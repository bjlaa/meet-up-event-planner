import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';


class UserLogin extends React.Component {
	render() {
		return(
			<div className="page">
				<Backbutton />
				<div className="user-login">
					<p>Login:</p>
					<form action="">
						<input type="text" name="email" placeholder="Type in your email" required/>
						<input type="text" name="password" placeholder="Type in your password" required/>
						<input type="submit" name="submit" value="Log In" />
					</form>
				</div>
				<Footer />
				
			</div>
		)
	}
}

export default UserLogin;