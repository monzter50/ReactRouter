import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
	super(props);

		this.state = {
			items: [],
			dates: null,
			term:''
		};
	}
	componentDidMount() {
		fetch('https://partyrockerscancun.checkfront.com/api/3.0/item?')
		.then(results => {
			return results.json()
		})
		.then( data => {
			this.setState({ items: data.items, dates:data.request.timestamp });
		});
	}
  render() {
    return (
        <div>
    	{
    	this.state.dates === 0 ? <h2>Loading..</h2> : <h2>{this.state.dates}</h2>
    	}
        </div>
    );
  }
}

export default About;