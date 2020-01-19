import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
  static propTypes = {
      imdbID: PropTypes.string,
      title: PropTypes.string,
      year: PropTypes.string,
      poster: PropTypes.string
  }

  render() {
    const {imdbID, Poster, Title, Year} = this.props.children

    return (
      <a href={`?id=${imdbID}`} className="card">
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
              <p className="title is-4">{Title}</p>
              <p className="subtitle is-6">{Year}</p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}