import React, {Component} from 'react'

export default class DetailColumn extends Component {
  render() {

    const {columnType, columnKey, columnValue} = this.props
    return (
      <div className="columns">
        <div className="column">
          <p className={columnType}>{columnKey}: </p>
        </div>
        <div className="column">
          <p className={columnType}>{columnValue}</p>
        </div>
      </div>
    )
  }
}