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

var base = Rebase.createClass('https://meet-up-eventplanner.firebaseio.com/');
*/
 
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage : "home",
			activeUser: {},
			activeEvent:{},
			eventDisplayed: {},
			users: [
				{name: "guest", email: "guest", password:"guest", birthdate: null, key: 0}
			],
			events: [
				{name:"Website Grand Opening", type:"Diner Party", 
				host:"Yours Truly", start:"Noon",
				end:"Midnight", guestlist:"No guestlist.", 
				location:"Warschaeuer Strasse, Berlin", 
				message:"Welcome welcome!", key:1, 
				creator: 0}
			],
			validation: ""
		};
	}
/*
	componentDidMount() {
		/*
		base.syncState("/", {
		context: this,
		state:'events'
		});
		*/
/*
		var localStorageRef = localStorage.getItem('user'+this.state.activeUser.key);
		if(localStorageRef) {
			this.setState({
				activeUser: JSON.parse(localStorageRef),
				currentPage: "userPage"
			});
		}	
	}
	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem("user" + this.state.activeUser.key, 
			JSON.stringify(nextState.activeUser));
	}
*/
	toggleHomePage() {

		this.setState({currentPage :"home"});
	}
	toggleCreateAccount() {

		this.setState({currentPage: "createAccount"});

	}
	toggleUserLogin() {
		this.setState({currentPage : "userLogin"});
	}
	toggleUserPage(connectingUser) {
		this.setState({currentPage : "userPage"});
		this.setState({activeUser: connectingUser})
	}
	toggleCreateEvent() {
		this.setState({currentPage : "createEvent"});
	}
	toggleEvent(keyEvent) {

	}


	addEvent(newEvent) {
		
		var newEventsArray = this.state.events.slice();
		newEventsArray.push(newEvent);
		this.setState({events: newEventsArray});
		this.toggleUserPage(this.state.activeUser);
	}

	addUser(newUser) {
		var newUsersArray = this.state.users.slice();
		newUsersArray.push(newUser);
		this.setState({users: newUsersArray});
		this.toggleUserPage(newUser);
	}

	signOut() {
		this.setState({ activeUser: {}});
		this.toggleHomePage()
	}
	goBack() {
		this.toggleUserPage(this.state.activeUser);
	}





	render() {
		
		/*
			Main components with props
		*/ 
		
		var homePageComp = <Homepage 
								toggleCreateAccount = {this.toggleCreateAccount.bind(this)}
								toggleUserLogin={this.toggleUserLogin.bind(this)} 
								toggleUserPage={this.toggleUserPage.bind(this)} 
								events={this.state.events} 
								toggleEvent={this.toggleEvent.bind(this)} 
								activeUser={this.state.activeUser} 
								users={this.state.users} />;
		
		var createAccountComp = <CreateAccount 
									toggleHomePage={this.toggleHomePage.bind(this)} 
									addUser={this.addUser.bind(this)} 
									users={this.state.users}
									validation={this.state.validation} />;
		
		var userLoginComp = <UserLogin toggleHomePage={this.toggleHomePage.bind(this)}
								toggleUserPage={this.toggleUserPage.bind(this)}
								users={this.state.users} />;
		
		var userPageComp = <UserPage toggleHomePage={this.toggleHomePage.bind(this)} 
								toggleCreateEvent={this.toggleCreateEvent.bind(this)} 
								events={this.state.events} 
								activeUser={this.state.activeUser} 
								signOut={this.signOut.bind(this)}
								toggleEvent={this.toggleEvent.bind(this)}  />;
		
		var createEventComp = <CreateEvent goBack={this.goBack.bind(this)}
									addEvent={this.addEvent.bind(this)}
									activeUser={this.state.activeUser} />;



		/*
			Conditional rendering of the main components
		*/

		var page;

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
reactMixin.onClass(App, Catalyst.LinkedStateMixin);
*/
/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(<App />, main);