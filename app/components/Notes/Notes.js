
import React from 'react';

export default class Notes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {notes:props.notes}
	}

	render () {
		return (
			<div className="container">
				<p>Notes: {this.state.notes}</p>
			</div>
		);
	}
}
