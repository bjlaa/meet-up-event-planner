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
/*
componentDidMount {
	base.syncState(this.store.params.storeId, {
	context: this,
	state:'fishes'
	});
}
*/
class App extends React.Component {
	render() {
		return(
			<div>
				<Homepage />
				<CreateAccount />
				<UserLogin />
				<UserPage />
				<CreateEvent />
			</div>
		)
	}
}

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(<App />, main);