import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

/*
	Components
*/
import HomePage from '../components/HomePage.js';
import CreateEvent from '../components/createEvent.js';
import CreateUserAccount from '../components/createUserAccount.js';
import UserHomePage from '../components/UserHomePage.js';
import UserLogin from '../components/UserLogin.js';

var routes = (
	<Router history={createHistory()}>
		<Route path="/" component={Homepage} />
		<Route path="/login" component={UserLogin} />
		<Route path="/homepage" component={UserHomePage} />
		<Route path="/createaccount" component={CreateUserAccount} />
		<Route path="/createevent" component={CreateEvent} />
	</Router>
)

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(routes, main);