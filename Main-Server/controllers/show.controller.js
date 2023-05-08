const Show = require ("../models/show.model")

module.exports ={
    // CREATE

    createShow: async (req,res) => {
        Show.create(req.body)
        .then(newShow => res.json(newShow)
        .catch(err => res.state(400).json(err)));
    },
    // READ
    getAllShows: (req,res) => {
        Show.find()
        .then(allShows => res.json(allShows)
        .catch(err => res.json(err)));
    },

    // UPDATE

    // DELETE
}