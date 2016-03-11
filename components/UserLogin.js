import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';


class UserLogin extends React.Component {

	userExist(e) {
		e.preventDefault();
		var refEmail = this.refs.loginEmail.value;
		var refPassword = this.refs.loginPassword.value;
		var users = this.props.users;
		var checkEmail;
		var checkPassword;

		for(var i = 0; i < users.length; i++) {
			if(users[i].hasOwnProperty("email") && users[i].hasOwnProperty("password")) {
				
				if(users[i].email == refEmail 
				&& users[i].password == refPassword ) {
					this.props.toggleUserPage(users[i]);
				}
			}
		}
	}
	render() {
		return(
			<div className="page">
				<Backbutton toggleHomePage={this.props.toggleHomePage} />
				<div className="user-login">
					<p>Login:</p>
					<form action="" onSubmit={this.userExist.bind(this)} >
						<input ref="loginEmail" type="text" name="email" placeholder="Type in your email" required autofocus/>
						<input ref="loginPassword" type="text" name="password" placeholder="Type in your password" required/>
						<input type="submit" name="submit" value="Log In" />
					</form>
				</div>
				<Footer />
				
			</div>
		)
	}
}

export default UserLogin;