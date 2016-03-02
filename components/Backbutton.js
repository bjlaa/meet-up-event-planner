import React from 'react';
import {Link} from 'react-router';


class Backbutton extends React.Component {
	render() {
		return(
			<Link to="/"><button>Back</button></Link> 
		)
	}
}

export default Backbutton;