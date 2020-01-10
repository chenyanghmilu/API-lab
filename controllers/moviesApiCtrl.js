const Movie = require('../models/movie');

const index = function(req, res) {
    Movie.find({})
        .populate('cast')
        .then(movies => {
            res.status(200).json(movies);
        });
};

const show = function(req, res) {
    Movie.findById(req.params.id)
        .populate('cast')
        .then(movie => {
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

const create = function(req, res) {
    Movie.create(req.body)
        .then(movie => {
            res.json(movie);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

const update = function(req, res){
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(movie => {
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

const deleteMovie = function(req, res) {
    Movie.findByIdAndDelete(req.params.id)
        .then(movie => {
            res.json({ movie, message: 'Successfully deleted movie' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteMovie
};