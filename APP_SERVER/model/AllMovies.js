const mongoose = require('mongoose');

var directorDetails = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type : String, required : true},
    noOfDirectedMovies : {type : Number, required: true}
});

var schemaOfMovie = new mongoose.Schema({
    mName : {type: String, required: true},
    mCategory : {type: String, required: true},
    mRatings: {type: Number, required: true, min: 1, max: 10},
    releasedYear : {type: Number, required: true},
    estimatedEarnings : {type: Number, required: true, min: 1},
    //director: [directorDetails]
});

// mongoose.model('MyMovieCollection', schemaOfMovie);
var movieModel = mongoose.model("movies", schemaOfMovie, "MyMovieCollection");

module.exports = { movieModel };