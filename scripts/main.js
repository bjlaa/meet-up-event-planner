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
import reactMixin from 'react-mixin';
import Catalyst from 'react-catalyst';

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
			currentPage : "createAccount",
			activeUser: {},
			eventDisplayed: {},
			users: [
				{name: "guest", email: "guest", password:"guest", birthdate: null}
			],
			events: [
				{name:"Website Grand Opening", type:"Diner Party", host:"Yours Truly", start:"Noon",
				end:"Midnight", guestlist:"No guestlist.", location:"Warschaeuer Strasse, Berlin", message:"Welcome welcome!", key:1}
			],
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
	toggleEvent(keyEvent) {
		console.log("event n°"+keyEvent);
	}

	addEvent(newEvent) {
		
		var newEventsArray = this.state.events.slice();
		newEventsArray.push(newEvent);
		this.setState({events: newEventsArray});
	}

	addUser(newUser) {
		var newUsersArray = this.state.users.slice();
		newUsersArray.push(newUser);
		this.setState({users: newUsersArray});
		this.setState({activeUser: newUser});
	}

	pushActiveUser(userConnected) {
		this.setState({activeUser: userConnected});			
	}


	render() {
		var page; 
		
		var homePageComp = <Homepage toggleCreateAccount = {this.toggleCreateAccount.bind(this)}
			toggleUserLogin={this.toggleUserLogin.bind(this)} toggleUserPage={this.toggleUserPage.bind(this)} 
			events={this.state.events} toggleEvent={this.toggleEvent.bind(this)}  />;
		
		var createAccountComp = <CreateAccount toggleHomePage={this.toggleHomePage.bind(this)} addUser={this.addUser.bind(this)} users={this.state.users}/>;
		
		var userLoginComp = <UserLogin toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var userPageComp = <UserPage toggleHomePage={this.toggleHomePage.bind(this)} toggleCreateEvent={this.toggleCreateEvent.bind(this)} events={this.state.events} />;
		
		var createEventComp = <CreateEvent toggleHomePage={this.toggleHomePage.bind(this)} addEvent={this.addEvent.bind(this)} />;
		
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

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(<App />, main);