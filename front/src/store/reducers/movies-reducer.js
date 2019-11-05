const initialState = {
  list: [],
  selected: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_MOVIE":
      return Object.assign({}, state, { selected: action.movie });
    case "RECEIVE_MOVIES":
      return Object.assign({}, state, { list: action.movies.Search });
    default:
      return state;
  }
};
