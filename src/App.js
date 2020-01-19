import React, {Component} from 'react';
import './App.css';
import './styles/styles.css';

import 'bulma/css/bulma.css'
import {Title} from './components/Title';
import {SearchForm} from './components/SearchForm';
import {MoviesList} from './components/MoviesList'

class App extends Component {
  state = {searched: false, results: []}

  _handleResults = (results) => {
    this.setState({results, searched: true})
  }

  _handleSearch = () => {
      return this.state.results.length === 0
        ? <p><span role="img" aria-label="Sad">😞</span> Sin resultados</p>
        : <MoviesList movies={this.state.results} />
  }

  render() {
  return (
    <div className="App">
      <Title>Buscador de películas</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={this._handleResults} />
      </div>
      {
      this.state.searched === true
        ? this._handleSearch()
        : null
      }      
    </div>
  )
  }
}

export default App;
