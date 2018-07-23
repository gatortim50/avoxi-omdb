import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movieActions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import logo from '../images/logo.png'

const initialState = { movies: '' }
class Header extends Component {
  state = initialState

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { movies } = this.state
    this.props.getMovies(movies)
  }

  render() {
    return (
      <Form inline onSubmit={this.onSubmit}>
        <img
          src={logo}
          className="App-logo"
          style={{
            width: '60px',
            marginLeft: '35px',
            marginRight: '300px',
          }}
          alt="logo"
        />
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="movies" className="mr-sm-2">
            Movies Search
          </Label>
          <Input
            type="text"
            name="movies"
            id="movies"
            value={this.state.movies}
            onChange={this.onChangeHandler}
            placeholder="Search By Title"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

Header.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  movies: state.movies,
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  {
    getMovies,
  }
)(Header)
