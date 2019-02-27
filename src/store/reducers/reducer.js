const initialState = {
  movies : [{
    "Title": "The Lego Movie",
    "Year": "2014",
    "imdbID": "tt1490017",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
  },
  {
    "Title": "The Simpsons Movie",
    "Year": "2007",
    "imdbID": "tt0462538",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg"
  },
  {
    "Title": "Scary Movie",
    "Year": "2000",
    "imdbID": "tt0175142",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Scary Movie 2",
    "Year": "2001",
    "imdbID": "tt0257106",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Scary Movie 3",
    "Year": "2003",
    "imdbID": "tt0306047",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
  },
  {
    "Title": "Bee Movie",
    "Year": "2007",
    "imdbID": "tt0389790",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
  },
  {
    "Title": "The Lego Batman Movie",
    "Year": "2017",
    "imdbID": "tt4116284",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
  },
  {
    "Title": "Scary Movie 4",
    "Year": "2006",
    "imdbID": "tt0362120",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
    "Title": "Epic Movie",
    "Year": "2007",
    "imdbID": "tt0799949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg"
  },
  {
    "Title": "Movie 43",
    "Year": "2013",
    "imdbID": "tt1333125",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4NzQ3NDM1Nl5BMl5BanBnXkFtZTcwNjEzMjM3OA@@._V1_SX300.jpg"
  }],
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
