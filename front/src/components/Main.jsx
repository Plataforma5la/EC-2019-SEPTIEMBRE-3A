import React from "react";
import InputContainer from "../containers/InputContainer";
import { Route, Switch } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";
import RouteHook from "react-route-hook";
import store from "../store/index";
import { fetchMovie } from "../store/actions/movies";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import { RegisterContainer } from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import { fetchUser } from "../store/actions/user";
import { connect } from "react-redux";
import FavsContainer from "../containers/FavsContainer";
import { fetchFavs } from "../store/actions/favs";
import Movies from "../components/Movies";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchFavs(this.props.user);
  }
  onMovieEnter({ match }) {
    store.dispatch(fetchMovie(match.params.movieId));
  }

  render() {
    return (
      <div>
        <InputContainer history={this.props.history} />
        <div>
          <Switch>
            <Route exact path="/" component={MoviesContainer} />
            <Route
              exact
              path="/register"
              render={() => <RegisterContainer history={this.props.history} />}
            />
            <Route
              exact
              path="/login"
              render={() => <LoginContainer history={this.props.history} />}
            />
            <Route
              exact
              path="/favorites"
              render={() => <Movies movies={this.props.movies} />}
            />
            <RouteHook
              path="/movies/:movieId"
              component={SingleMovieContainer}
              onEnter={this.onMovieEnter}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ logged, favs }) => ({
  movies: favs.favs,
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchFavs: user => dispatch(fetchFavs(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
