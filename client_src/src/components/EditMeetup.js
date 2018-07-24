import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditMeetup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			city: '',
			address: ''
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		const newMeetup = {
			name: this.refs.name.value,
			city: this.refs.city.value,
			address: this.refs.address.value
		}
		this.editMeetup(newMeetup)
	}

	editMeetup(newMeetup) {
		axios.request({
			method: 'put',
			url: `http://localhost:3000/api/meetups/${this.state.id}`,
			data: newMeetup
			}
		).then(
			res => {
				this.props.history.push('/');
			}
		).catch(
			err => {
				console.log(err);
			}
		)
	}

	handleInputChange  = (e) => {

		const target = e.target;
		const name = target.name;
		const value = target.value
		this.setState({
			[name]: value
		});
	}

	getMeetupDetails() {
		let meetupId = this.props.match.params.id;

		axios.get(`http://localhost:3000/api/meetups/${meetupId}`).then(
			res => {
				this.setState({
					id: res.data.id,
					name: res.data.name,
					city: res.data.city,
					address: res.data.address
				}, () => {
					console.log(this.state);
				});
			}
		).catch(
			err => {
				console.log(err);
			}
		);
	}

	componentWillMount() {
		this.getMeetupDetails();
	}

	render() {
		return (
			<div>
				<br />
				<Link className="btn grey" to="/">Back</Link>
				<h1>Edit Meetup</h1>
				<form onSubmit={this.onSubmit}>
					<div className="input-field">
						<input onChange={this.handleInputChange} value={this.state.name} type="text" name="name" ref="name" />
						<label className="active" htmlFor="name">Name</label>
					</div>
					<div className="input-field">
						<input onChange={this.handleInputChange} value={this.state.city} type="text" name="city" ref="city" />
						<label className="active" htmlFor="city">City</label>
					</div>
					<div className="input-field">
						<input onChange={this.handleInputChange} value={this.state.address} type="text" name="address" ref="address" />
						<label className="active" htmlFor="address">Address</label>
					</div>
					<input type="submit" value="save" className="btn" />
				</form>
			</div>
		)
	}
}

export default EditMeetup