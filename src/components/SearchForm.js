import React, {Component} from 'react'

const API_KEY = '65ef3365'


export class SearchForm extends Component {

  state = {
    inputMovie: ''
  }

   _handleChange = (e) => {
     this.setState({inputMovie: e.target.value})
  }

  _handleClick = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const {Search = [], totalResults = '0'} = results
        console.log({Search, totalResults})
        this.props.onResults(Search)
      })
  }

  render() {
    return(
      <form onSubmit={this._handleClick}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              onChange={this._handleChange}
              type="text" 
              placeholder="Buscar película" />
          </div>
          <div className="control">
            <button 
              className="button is-info">
              Buscar
            </button>
          </div>
        </div>
      </form>
    )
  }
}