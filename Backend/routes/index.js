const express = require('express');
const axios = require('axios');
const apicache = require('apicache');

const router = express.Router();
const apiKey = 'ae4f23e6';
const urlForSearch = (search, pageNum) => `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${pageNum}`;

const cache = apicache.middleware;
const numPages = 2;

router.get('/movies', cache('1 hour'), async (req, res) => {
    try {
        const search = req.query.search;
        console.log(`Search by: ${search}`);

        const promises = [];
        for (let i = 1; i <= numPages; i++) {
            promises.push(axios.get(urlForSearch(search, i)));
        }

        const result = await Promise.all(promises);

        let data = [];
        for (const part of result) {
            if (part.data.Search) {
                data = data.concat(part.data.Search);
            }
        }

        res.json(data);
    
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
