import React, { Component } from 'react'; 

export default class FilterObject extends Component {
    constructor(){
        super(); 
        
        this.state = {
            unFilteredArray: [ 
                { 
                    "name": "Jimmy Joe", 
                    "title": "Hack0r", 
                    "age": 12 
                }, 
                { 
                    "name": 
                    "Jeremy Schrader", 
                    "age": 24, 
                    "hairColor": "brown" 
                }, 
                { 
                    "name": "Carly Armstrong", 
                    "title": "CEO" 
                } 
            ],
              
            userInput:'',
            filteredArray: []
        }
    }

    handleChange = (value) => {
        this.setState({
            userInput: value
        })
    }

    filterArray = (property) => {
        const unFiltered = this.state.unFilteredArray; 
        const filtered = []; 

        for(let i = 0; i < unFiltered.length; i++) {
            if(unFiltered[i].hasOwnProperty(property)) {
                filtered.push(unFiltered[i])
            }
        } 
        this.setState({filterArray: filtered}); 
        console.log('filtered:', this.state.filteredArray);
        
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={event => {this.handleChange(event.target.value)}}></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}