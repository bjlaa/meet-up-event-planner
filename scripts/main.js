import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

class App extends React.Component {
	render() {
		return(
			<div>Mes glawies</div>
		)
	}
}

var routes = (
	<Router history={createHistory()}>
		<Route path="/" component={App} />
	</Router>
)

/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(routes, main);