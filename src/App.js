import React, { Component } from 'react';
import './styles/main.css';
import Movie from './components/movie';
import data from './components/data';

class App extends Component {
  state = {
    query: '',

  }

  searchText = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render () {

    let name = [];
    let year = [];

    Object.keys (data).forEach( key => {
      name.push(data[key].title);
      year.push(data[key].year);

    })

    let newName = name.filter( (movie) => {                   
      return movie.toLowerCase().indexOf(this.state.query) !== -1;
    }) 

    console.log(name);
    console.log(year);

    return (
      <div className="container">
        <div className="input-container">
          <label>Search for a Movie</label>
          <input type="text" placeholder="" onKeyUp={this.searchText} /> 
          <button>Search</button>
        </div>
        <div className="movies-container">
          
          {
            newName.map( (movie, i) => {
              return <Movie name={movie} title={name[i]} year={year[i]} key={i} />
              
            })
          }
          
        </div>
      </div>
    );
  }
 
}

export default App;
