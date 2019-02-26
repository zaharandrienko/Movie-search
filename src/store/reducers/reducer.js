const initialState = {
  movies : [],
  loading : false,
  name : "vahe"
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    
    case "GET_MOVIES":
      newState.loading = false;
      newState.movies = action.value;
      break;
    case "LOADING":
      newState.loading = true;
  }
  return newState;
};

export default reducer;
