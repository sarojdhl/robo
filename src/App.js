import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';

class App extends React.Component {
	constructor(){
    	super()
    	this.state = {
    		robots: [],
    		searchfield: ''
    	} 
    }


    componentDidMount() {
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response=> response.json())
    	.then(users => this.setState({robots: users}));
    }




    onSearchChange=(event) =>{
    	this.setState({searchfield : event.target.value})
    	
    }	



	render() {
		const filteredrobots = this.state.robots.filter(robots =>{
    		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	})

    	if (this.state.robots.length === 0){
    		return <h1>Loading</h1>
    	}
    	else{
			return (
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchchange = { this.onSearchChange}/>
					<Cardlist robots={ filteredrobots }/>
				</div>	
			);
		}

	}
}

export default App;