// Express call
const express = require('express')
const app = express()

// Port
const port = 4000

// BodyParser
const bodyParser = require('body-parser');
const { request } = require('http');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Get
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!')
})

// /whatever
app.get('/whatever', (req, res) => {
    res.send('Hello from whatever');
})

// Hello <Name>
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

// Movies API
app.get('/api/movies', (req, res) => {

    // Constant
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    // Response JSON
    res.json({
        mymovies: movies,
        Message: 'data sent!'
    });
})

// /test
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// /name
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})

// POST
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.firstname + ' ' + req.body.lastname);
})

// Listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})