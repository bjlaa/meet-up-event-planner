import React from 'react';
import Footer from '../components/Footer.js';
import Backbutton from '../components/Backbutton.js';

class CreateAccount extends React.Component {
	componentDidMount() {
		this.refs.name.focus();
	}
	validateInput(e) {
		var element ="error"+e.target.name;
		if(e.target.value == "") {
			this.refs[element].style.visibility = "visible";
		} else {
			this.refs[element].style.visibility = "hidden";
		}	
	}
	postUser(e) {
		e.preventDefault();
		
		var timestamp = (new Date()).getTime();
		var newUser = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
			bithdate: this.refs.birthdate.value,
			key: timestamp
		}
		this.props.addUser(newUser);
	}

	render() {
		return(
			<div className="page">
				<Backbutton toggleHomePage={this.props.toggleHomePage} />
				<div className="create-account">
					<p className="title-account">Create Your Account:</p>
					<form className="form-create-account" action="" onSubmit={this.postUser.bind(this)}>
						<label className="label-create-name" htmlFor="name">
							What's Your Name?*
							<input ref="name" className="create-name" type="text" 
							name="name" placeholder="Type in your full name" 
							required autofocus onBlur={this.validateInput.bind(this)}/>
							<div className="checkmark"></div>
							<p ref="errorname" className="error-message" >*Field is required.</p>
						</label>
						<br/>
						<label className="label-create-email" htmlFor="email">
							And Your Email?*
							<input ref="email" className="create-email" type="email" 
							name="email" placeholder="Type in your email" required
							onBlur={this.validateInput.bind(this)} />
							<div className="checkmark"></div>
							<p ref="erroremail" className="error-message" >*Field is required.</p>
						</label>
						<br/>
						<label className="label-create-password" htmlFor="password">
							Please choose a password*
							<input ref="password" className="create-password" 
							type="password" name="password" placeholder="Type in your password" required
							onBlur={this.validateInput.bind(this)} />
							<div className="checkmark"></div>
							<p ref="errorpassword" className="error-message" >*Field is required.</p>
						</label>
						<br/>
						<label className="label-create-birthdate" htmlFor="birthdate">
						What's Your Birthdate? (Optional)
							<input ref="birthdate" className="create-birthdate" 
							type="date" name="birthdate" />
						</label>
						<br/>
						<input className="submit-button" type="submit" value="Create User Account" />
					</form>
				</div>
				<Footer />			
			</div>
		)
	}
}

export default CreateAccount;