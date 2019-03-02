var express = require('express');
var router = express.Router();
const axios = require('axios');




router.get('/movies', function (req, res, next) {


  let search = req.query.search;

  console.log("Seach key " + search);
  let imdbUrlFirst = `http://www.omdbapi.com/?apikey=ae4f23e6&s=${search}&page=1`
  let imdbUrlSecond = `http://www.omdbapi.com/?apikey=ae4f23e6&s=${search}&page=2`


  let fistPromise = axios.get(imdbUrlFirst);
  let secondPromise = axios.get(imdbUrlSecond);

  let resRpomist = Promise.all([fistPromise, secondPromise]);

  resRpomist.then((resp) => {

    let fistArray = resp[0].data.Search;
    let secondArray = resp[1].data.Search

    res.json([...fistArray, ...secondArray]);

  })
    .catch((error) => {
      console.log(error);
    })
});

module.exports = router;
