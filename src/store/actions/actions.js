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
    fetch('http://www.omdbapi.com/?apikey=ae4f23e6&s=' + val + '&page=1')
    .then(e => e.json())
    .then(data => dispach(getMoviesSimple(data.Search)))

  };
};

