import React from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import { fetchMovies } from "../store/actions/movies";
import Movies from "../components/Movies";
import axios from "axios";
import store from "../store/index";
import { logOutUser } from "../store/actions/user";

class InputContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      movieQuery: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    this.props.logOutUser();
    this.props.history.push("/");
  }

  handleChange(movie) {
    this.setState({ movieQuery: movie });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.movieQuery) this.props.fetchMovies(this.state.movieQuery);
    this.props.history.push("/");
    this.setState({ movieQuery: "" });
  }
  render() {
    return (
      <Input
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        movieQuery={this.state.movieQuery}
        user={this.props.user}
        handleLogOut={this.handleLogOut}
      />
    );
  }
}
const mapStateToProps = ({ movies, logged }) => ({
  movies: movies.list,
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: name => dispatch(fetchMovies(name)),
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputContainer);
