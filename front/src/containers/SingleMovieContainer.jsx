import React from "react";
import { connect } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import { createFav } from "../store/actions/favs";
import { deleteFav } from "../store/actions/favs";

class SingleMovieContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.checkFavs = this.checkFavs.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(movie) {
    this.props.createFav(movie);
  }
  handleDelete(movie) {
    this.props.deleteFav(movie);
  }

  checkFavs() {
    let value = false;
    this.props.favs.forEach(element => {
      if (element.imdbID === this.props.movie.imdbID) {
        value = true;
      }
    });
    return value;
  }
  render() {
    return (
      <SingleMovie
        handleClick={this.handleClick}
        movie={this.props.movie}
        favs={this.props.favs}
        checkFavs={this.checkFavs}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = ({ movies, favs }) => ({
  movie: movies.selected,
  favs: favs.favs
});
const mapDispatchToProps = dispatch => ({
  createFav: movie => dispatch(createFav(movie)),
  deleteFav: movie => dispatch(deleteFav(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovieContainer);
