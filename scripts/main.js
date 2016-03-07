/*eslint-env node */

import React from 'react';
import ReactDOM from 'react-dom';

/*
	Components
*/
import Homepage from '../components/HomePage.js';
import CreateEvent from '../components/createEvent.js';
import CreateAccount from '../components/createAccount.js';
import UserPage from '../components/UserPage.js';
import UserLogin from '../components/UserLogin.js';
import Rebase from 're-base';

/* 
	Firebase 
*/
var base = Rebase.createClass('https://meet-up-eventplanner.firebaseio.com/');


class App extends React.Component {
	constructor(props) {
		super(props);
/*
		base.syncState(this.store.params.storeId, {
		context: this,
		state:'events'
		});
*/
		this.state = {
			currentPage : "home",
			activeUser:{},
			users: {},
			events: {},
		};
	}
	toggleHomePage() {
		this.setState({currentPage :"home"});
	}
	toggleCreateAccount() {

		this.setState({currentPage: "createAccount"});

	}
	toggleUserLogin() {
		this.setState({currentPage : "userLogin"});
	}
	toggleUserPage() {
		this.setState({currentPage : "userPage"});
	}
	toggleCreateEvent() {
		this.setState({currentPage : "createEvent"});
	}

	render() {
		var page;
		
		var homePageComp = <Homepage toggleCreateAccount = {this.toggleCreateAccount.bind(this)}
			toggleUserLogin={this.toggleUserLogin.bind(this)} toggleUserPage={this.toggleUserPage.bind(this)} />;
		
		var createAccountComp = <CreateAccount toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var userLoginComp = <UserLogin toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var userPageComp = <UserPage toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var createEventComp = <CreateEvent toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		/*if(this.state.currentPage = "home") {
			page = homePageComp;

		} else if(this.state.currentPage = "createAccount") {
			page = createAccountComp;

		} else if(this.state.currentPage = "userLogin") {
			page = userLoginComp;

		} else if(this.state.currentPage = "userPage") {
			page = userPageComp;

		} else if(this.state.currentPage = "createEvent") {
			page = createEventComp;

		} else {
			page = (<div></div>);
		}
		*/
		switch (this.state.currentPage) {
			case "home":
				page = homePageComp;
				break;
			case "createAccount":
				page = createAccountComp;
				break;
			case "userLogin":
				page = userLoginComp;
				break;
			case "userPage":
				page = userPageComp;
				break;
			case "createEvent":
				page = createEventComp;
				break;
			default:
				page = <div></div>;
				break;
		}
		return(
			<div>
				{page}
			</div>
		)
	}
}

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(<App />, main);