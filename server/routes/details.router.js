const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const query = `SELECT * FROM movies WHERE id = ${id}`
    pool.query(query, [req.body.title. req.body.poster, req.body.description])
        .then(result => {
            console.log(`in details router.post`);
            axios.get()
        })
})