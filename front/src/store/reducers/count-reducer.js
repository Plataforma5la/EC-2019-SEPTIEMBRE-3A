const initialState = {
  count: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNT":
      return Object.assign({}, state, {
        count: action.count
      });

    default:
      return state;
  }
};
