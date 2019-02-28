var express = require('express');
var router = express.Router();
const axios = require('axios');



router.get('/home', function (req, res, next) {

  let search = req.query.search;

  console.log("VVVVVVVV " + search)
  let imdbUrl = `http://www.omdbapi.com/?apikey=ae4f23e6&s=${search}&page=1`
  
  axios.get(imdbUrl)
    .then((response) => {
      // handle success
    
      console.log("FINEEEEEEEEEEEEe")

      res.json(response.data)
    })
    .catch((error) => {
     
      console.log(error);
    })

});

module.exports = router;
