const index = (req, res) =>{
    res.render('index', {title:'Welcome to Movie Studio'});
}

module.exports = { index };