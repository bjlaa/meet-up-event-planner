import React from 'react';
import {Link} from 'react-router';
import Footer from '../components/Footer.js';

class UserHomePage extends React.Component {
	render() {
		return(
			<div className="page">
				<div className="user-home">
					<Link to="/createevent"><button>Create an Event:</button></Link>
					<Link to="/"><button>Sign Out</button></Link>
					<div className="event-list-user">

					</div>
				</div>
			</div>
		)
	}
}

export default UserHomePage;