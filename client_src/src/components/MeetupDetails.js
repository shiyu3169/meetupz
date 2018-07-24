import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			details:''
		}
	}

	render() {
		return (
			<div>
				<br />
				<Link className="btn grey" to="/">Back</Link>
				<h1>Detials</h1>
			</div>
		)
	}
}

export default MeetupDetails