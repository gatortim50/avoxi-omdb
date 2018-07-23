import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const initialState = {
  detailsList: [],
}
class Landing extends Component {
  state = initialState

  render() {
    console.log('landing movie detail props: ', this.props.movies.movies)
    const { detail } = this.props.movies.movies
    if (detail) {
    }
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" />
            <td>{this.props.movies.movies.Title}</td>
            <td>{this.props.movies.movies.Year}</td>
            <td>{this.props.movies.movies.Genre}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Landing.propTypes = {
  movies: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  movies: state.movies,
  errors: state.errors,
})

export default connect(mapStateToProps)(Landing)
