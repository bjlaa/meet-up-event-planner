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
			currentPage : "home",
			activeUser: {},
			eventDisplayed: {},
			users: {},
			events: [
				{name:"Website Grand Opening", type:"Diner Party", host:"Yours Truly", start:"Noon",
				end:"Midnight", guestlist:"No guestlist.", location:"Warschaeuer Strasse, Berlin", text:"Welcome welcome!", key:1}
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
	/*
	toggleEvent(keyEvent) {
		var 
		this.setState
	}*/

	render() {
		var page;
		
		var homePageComp = <Homepage toggleCreateAccount = {this.toggleCreateAccount.bind(this)}
			toggleUserLogin={this.toggleUserLogin.bind(this)} toggleUserPage={this.toggleUserPage.bind(this)} 
			events={this.state.events} />;
		
		var createAccountComp = <CreateAccount toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var userLoginComp = <UserLogin toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var userPageComp = <UserPage toggleHomePage={this.toggleHomePage.bind(this)} />;
		
		var createEventComp = <CreateEvent toggleHomePage={this.toggleHomePage.bind(this)} />;
		
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