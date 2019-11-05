const initialState = {
  favs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FAVS":
      if (!Array.isArray(action.favs))
        return { ...state, favs: [...state.favs, action.favs] };
      else {
        return { ...state, favs: action.favs };
      }
    default:
      return state;
  }
};
