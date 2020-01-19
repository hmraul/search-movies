import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Title} from '../components/Title';
import {SearchForm} from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'


import '../styles/styles.css';


export class Home extends Component {
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
        <div>
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