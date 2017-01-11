
import React from 'react';

export default class Repos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {repos: props.repos}
	}
	render () {
		return (
			<div className="container">
				<p>Repos: {this.state.repos}</p>
			</div>
		);
	}
}

