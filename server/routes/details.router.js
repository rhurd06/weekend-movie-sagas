const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.post('/', (req, res) => {
//     const query = `SELECT * FROM movies WHERE id = ${id}`
//     pool.query(query, [req.body.title. req.body.poster, req.body.description])
//         .then(result => {
//             console.log(`in details router.post`);
//             axios.get()
//         })
// })

router.get('/details', (req, res) => {
    const query = `SELECT movies.title, movies.poster, movies.description, 
                        ARRAY_AGG(genres.name) as genres FROM movies
                    JOIN movies_genres on movies.id = movies_genres.movie_id 
                    JOIN genres on movies_genres.genre_id = genres.id 
                    WHERE movies.id = $1
                    GROUP BY movies.title, movies.poster, movies.description;`;
    pool.query(query, [req.params.id])
        .then(result => {
            console.log(`in details router.get`);
            res.send(result.rows)
        })
        .catch(error => {
            console.log(`error in details router.get`, error);
            res.sendStatus(500);
        })
})

module.exports = router;