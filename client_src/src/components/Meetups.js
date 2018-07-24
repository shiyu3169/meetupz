import React, { Component } from 'react';
import axios from 'axios';

class Meetups extends Component {

	constructor(){
		super();
		this.state = {
			meetups: []
		}
	}

	getMeetups(){
		axios.get('http://localhost:3000/api/meetups').then(
			res => {
				// console.log(res.data);
				this.setState(
					{
						meetups: res.data
					}, 
					() => {
					console.log(this.state);
					}
				);
			}
		)
	}

	componentWillMount(){
		this.getMeetups();
	}

	render(){
		const meetupItems = this.state.meetups.map(
			(meetup, i) => {
				return <li className="collection-item">{meetup.name}</li>
			}
		)

		return (
			<div>
				<h1>Meetups</h1>
				<ul className="collection">
					{meetupItems}
				</ul>
			</div>
		)
	}
}

export default Meetups;