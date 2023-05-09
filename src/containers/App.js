import React, { Component } from 'react';
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor(){
        super() // calls the constructor of the state
        this.state = {
            robots: [],
            searchfiled: ''             
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfiled: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
    render(){
        const filterrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase())
        })
        if (this.state.robots.length === 0){
            return <h1 className='tc'>Loading...</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f2'> Robot Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterrobots} />
                        </ErrorBoundary>
                        
                    </Scroll>
                    
                </div>
                )
        
            }    }
    }

export default App