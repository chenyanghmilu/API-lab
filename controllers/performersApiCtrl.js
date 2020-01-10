const Performer = require('../models/performer');

const index = function(req, res) {
    Performer.find({})
        .then(performers => {
            res.status(200).json(performers);
        });
};

const show = function(req, res) {
    Performer.findById(req.params.id)
        .then(performer => {
            if (performer) {
                res.status(200).json(performer);
            } else {
                res.status(404).json({ error: 'Performer not found' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

const create = function(req, res) {
    Performer.create(req.body)
        .then(performer => {
            res.json(performer);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

const update = function(req, res) {
    Performer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(performer => {
            if (performer) {
                res.status(200).json(performer);
            } else {
                res.status(404).json({ error: 'Performer not found' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

const deletePerformer = function(req, res) {
    Performer.findByIdAndDelete(req.params.id)
        .then(performer => {
            res.json({ performer, message: 'Successfully deleted performer' });
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
    delete: deletePerformer
};