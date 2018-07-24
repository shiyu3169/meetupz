import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem'

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
				return <MeetupItem key={meetup.id} item={meetup} />
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