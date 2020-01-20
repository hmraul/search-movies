import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { HomeLinkButton } from '../components/HomeLinkButton'

import DetailColumn from './DetailColumn'

const API_KEY = '65ef3365'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape ({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {}}

  _fetchMovie = (id) => {  
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({movie: movie})
      })
  }

  _goBack = () => {
    window.history.back()
  }

  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params
    this._fetchMovie(id)
  }


  render() {
    const {Actors, Director, Plot, Poster, Title, Year} = this.state.movie
    return (
      <div>
        <HomeLinkButton />
        <div className="card-image">
          <figure className="image">
            <img
              alt={Title} 
              src={Poster}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <DetailColumn 
                columnType='title is-4'
                columnKey = 'Título'
                columnValue = {Title}
              />
              <DetailColumn 
                columnType='subtitle is-6'
                columnKey = 'Año'
                columnValue = {Year}
              />
              <DetailColumn 
                columnType='subtitle is-6'
                columnKey = 'Director'
                columnValue = {Director}
              />
              <DetailColumn 
                columnType='subtitle is-6'
                columnKey = 'Actores'
                columnValue = {Actors}
              />
            </div>
          </div>

          <div className="content">
            {Plot}            
          </div>
        </div>        
      </div>
    )
  }
}