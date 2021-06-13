const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const { homeDir } = require('os');
const db_model = require('./db_model');
const { db } = require('./db_model');

const router = express.Router();









router.post('/insert', async (req, res) => {


    console.log("request received");
    console.log(req.body);
    var movie = new db_model(req.body);
    var isResponded = false;
    await movie.save((err, result) => {

        if (err)
            console.log(err);
        else
            res.send("hello world");

    })


})

router.get('/getmovies', (req, res) => {

    db_model.find({}, (err, data) => {
        if (err)
            console.log(err);
        else
            res.send(data);

    })
})


router.put('/delete', (req, res) => {

    var movieId = req.query.id;
    db_model.deleteOne({ _id: movieId }, (err, data) => {
        if (!err) {
            console.log(data);
            res.send("deleted");
        }
        else
            console.log(err)
    })
})


router.get('/getOne', (req, res) => {

    var id = req.query.id;
    db_model.find(({ _id: id }), (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result[0]);
    })
})

router.put('/update', async (req, res) => {


    console.log("update request received");
    console.log(req.body);
    var movie = new db_model(req.body);

    await movie.save((err, result) => {

        if (err)
            console.log(err);
        else
            res.send("hello world");

    })

})
module.exports = router;