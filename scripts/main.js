/*eslint-env node */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

/*
	Components
*/
import Homepage from '../components/HomePage.js';
import CreateEvent from '../components/createEvent.js';
import CreateAccount from '../components/createAccount.js';
import UserPage from '../components/UserPage.js';
import UserLogin from '../components/UserLogin.js';

var routes = (
	<Router history={createHistory()}>
		<Route path="/" component={Homepage} />
		<Route path="/login" component={UserLogin} />
		<Route path="/userpage" component={UserPage} />
		<Route path="/createaccount" component={CreateAccount} />
		<Route path="/createevent" component={CreateEvent} />
	</Router>
)

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(routes, main);