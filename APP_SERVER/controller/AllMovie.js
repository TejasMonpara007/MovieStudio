const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderHomepage = function(req, res, responseBody) {
    console.log(responseBody);
    res.render('list-display', {
        movies:responseBody
    });
};


const myMovieList = function(req, res){
    const path = '/api/movies';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);

        }
        
    );
};

const _renderDetailPage = function(req, res, responseBody)
{
    console.log(responseBody);

    res.render('display', {               
        currentMovies:responseBody
        
    });
  
    console.log(responseBody);
};

const movieInfo = function (req, res){

    const path = `/api/movies/${req.params.moviesid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    console.log(requestOptions.url);

    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
            console.log(body);
        }
    );
};


// to create movies

const _renderCreatePage = function(req, res) {
    res.render('create-movie',{
        title:"Create New Movies"
    });
};

const addNewMovie = function(req, res){
    _renderCreatePage(req, res);
};

const doAddNewMovie = function(req, res){
    const path = '/api/movies';
    const postdata = {
        mName: req.body.mName,
        mCategory: req.body.mCategory,
        mRatings: req.body.mRatings,
        releasedYear: req.body.releasedYear,
        estimatedEarnings: req.body.estimatedEarnings
    };

    const requestOptions = {
        url:apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 201){
                res.redirect('/movies');
            }
        }
    );
};
var renderEditListPage = function(req, res, responseBody) {

    res.render('editmovie', { 
        title: 'Edit', 
        movies: responseBody,
       
    }); 
    
};

const updateMovie = function (req, res) {

    var requestOption, path;

    var path = '/api/movies/' + req.params.moviesid;

    requestOption = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(requestOption, function(err, response, body) {

        renderEditListPage(req, res, body);
    
    });
}


const doEditMovie = function(req,res) {
    const path = '/api/movies/' + req.params.moviesid;
    const postdata = {
        
        mName: req.body.mName,
        mCategory: req.body.mCategory,
        mRatings: req.body.mRatings,
        releasedYear: req.body.releasedYear,
        estimatedEarnings: req.body.estimatedEarnings
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'PUT',
        json: postdata
    }
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200) {
                res.redirect('/movies');
            }
        }
    );
};




module.exports = { myMovieList, movieInfo, doAddNewMovie, addNewMovie, updateMovie, doEditMovie};

