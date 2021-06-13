const mongoose = require('./db_connection');

const Schema = mongoose.Schema;


const movieSchema = new Schema({
    thumbnailUrl: String,
    language: String,
    name: String,
    releaseDate: Date,
    budget: Number,
    collections: Number

});


const MovieModel = mongoose.model('movie', movieSchema);




module.exports = MovieModel