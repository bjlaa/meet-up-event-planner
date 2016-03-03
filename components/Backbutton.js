import React from 'react';



class Backbutton extends React.Component {
	handleClick() {
		this.props.toggleHomePage();
	}
	render() {
		return(
			<button onClick={this.handleClick}>Back</button>
		)
	}
}

export default Backbutton;