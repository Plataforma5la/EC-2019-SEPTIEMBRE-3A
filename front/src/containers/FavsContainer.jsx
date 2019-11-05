import React from "react";
import Movies from "../components/Movies";
import { fetchFavs } from "../store/actions/favs";
import { connect } from "react-redux";

export default class FavsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Movies movies={this.props.movies} />;
  }
}
