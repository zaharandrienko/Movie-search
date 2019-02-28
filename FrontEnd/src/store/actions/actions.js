export const loading = () => {
  return {
    type: "LOADING"
  };
};

export const getMoviesSimple = movies => {
  return {type: "GET_MOVIES", value : movies};
}

export const getMovies = val => {
  
  return dispach => {
    dispach(loading());
    fetch(`http://localhost:4000/home?search=${val}`)
    .then(e => e.json())
    .then(data => dispach(getMoviesSimple(data.Search)))

  };
};

