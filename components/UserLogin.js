import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';


class UserLogin extends React.Component {

	componentDidMount() {
		this.refs.loginEmail.focus();
	}
	validateInput(e) {
		var element ="error"+e.target.name;
		if(e.target.value == "") {
			this.refs[element].style.visibility = "visible";
		} else {
			this.refs[element].style.visibility = "hidden";
		}	
	}
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
					<p className="login-title" >Login:</p>
					<form action="" onSubmit={this.userExist.bind(this)} >
						<label htmlFor="email">Email Address:
							<input className="login-email" ref="loginEmail" type="email" 
							name="email" placeholder="Type in your email" required 
							autofocus onBlur={this.validateInput.bind(this)} />
							<p ref="erroremail" className="error-message" >*Field is required.</p>
						</label>
						<br/>
						<label htmlFor="password">Password:
							<input className="login-password" ref="loginPassword" 
							type="password" name="password" 
							placeholder="Type in your password" required
							onBlur={this.validateInput.bind(this)} />
							<p ref="errorpassword" className="error-message" >*Field is required.</p>
						</label>
						<br/>
						<input className="submit-button" type="submit" name="submit" value="Log In" />
					</form>
				</div>
				<Footer />
				
			</div>
		)
	}
}

export default UserLogin;