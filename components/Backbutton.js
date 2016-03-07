import React from 'react';



class Backbutton extends React.Component {
	render() {
		return(
			<button onClick={this.props.toggleHomePage}>Back</button>
		)
	}
}

export default Backbutton;