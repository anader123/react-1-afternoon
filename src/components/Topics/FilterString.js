import React, { Component } from 'react'; 

export default class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        };
    }

    handleChange = (value) => {
        this.setState({
            userInput: value
        });
    }

    filterNames = (userInput) => {
        let names = this.state.names;
        const filterNames = [];

        for(let i = 0; i < names.length; i++) {
            if(name[i].includes(userInput)) {
                filterNames.push(names[i]); 
            }
        }
        this.setState({filteredNames: filterNames}); 
        console.log(this.state.filteredNames);
        
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span  className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
            </div>
        )
    }
}