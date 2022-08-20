const mongoose = require('mongoose');
var myMOvies = require('../../APP_SERVER/model/AllMovies');

// const myMOvies = mongoose.model('movies');

var sendJSONresponse = function(res, status, content) {
    res.status(status).json(content);
};


const getAllMoviesList = function(req,res) {
    myMOvies.movieModel.find().exec(function(err, moviesdata){
        if (err)
        {
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(moviesdata);
        console.log(moviesdata);
    });
    
};

const createAllMovies = function(req,res) {
    myMOvies.movieModel.create({
        mName: req.body.mName,
        mCategory: req.body.mCategory,
        mRatings: req.body.mRatings,
        releasedYear: req.body.releasedYear,
        estimatedEarnings : req.body.estimatedEarnings
    }, (err, moviedata) =>{
        if(err){
            res
            .status(400)
            .json(err);
        }else{
            res
            .status(201)
            .json(moviedata);
        }
    });
};

const getSingleMovie = function(req,res) {
    myMOvies.movieModel.findById(req.params.moviesid)
        .exec((err, moviedata) => {
            if (!moviedata) {
                return res
                        .status(404)
                        .json({
                            " message " : " movies id not found "
                        });
            } else if (err) {
                return res
                        .status(404)
                        .json(err);
            }
            res
            .status(200)
            .json(moviedata);
        });
};

const updateMovies = function(req,res) {
    
    if(!req.params.moviesid){
        sendJSONresponse(res, 400, { "message": "Movie id is required" });
        return;
    }

    myMOvies.movieModel.findById(req.params.moviesid).exec(function(err, movie){

        if(err){
            sendJSONresponse(res, 500, err);
            return;
        }

        if (!movie) {
            sendJSONresponse(res, 404, { "message": "movie not found" });
            return;
        }

        movie.mName = req.body.mName;
        movie.mCategory = req.body.mCategory;
        movie.mRatings = req.body.mRatings;
        movie.releasedYear = req.body.releasedYear;
        movie.estimatedEarnings = req.body.estimatedEarnings;
        

        movie.save(function(err, movie){
            if (err) {
                sendJSONresponse(res, 500, err);
            } else {
                sendJSONresponse(res, 200, movie);
            }
        });

    });

};

const deleteMovies = function(req,res) {
    const moviesid = req.params.moviesid;
    if(moviesid){
        myMOvies.movieModel.
        findByIdAndRemove(moviesid)
        .exec((err, moviedata) =>{
            if(err){
                res.
                status(404)
                .json(err);
            return;
            }
            res
            .status(204)
            .json(null);
        });
    }else{
        res
        .status(404)
        .json({"message" : "No Moviesid"});
    }
};

module.exports = {

    getAllMoviesList, 
    createAllMovies,
    getSingleMovie,
    updateMovies,
    deleteMovies
}