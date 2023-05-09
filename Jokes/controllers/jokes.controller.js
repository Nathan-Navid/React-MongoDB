const Joke = require ("../models/jokes.model")

module.exports ={
    // CREATE

    createJoke: async (req,res) => {
        Joke.create(req.body)
        .then(newJoke => res.json(newJoke)
        .catch(err => res.json(err)));
    },
    // READ
    getAllJokes: (req,res) => {
        Joke.find()
        .then(allJokes => res.json(allJokes)
        .catch(err => res.json(err)));
    },
    // READ ONE
    getOneJoke: (req,res) =>{
        // console.log(req)
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err));
    },

    // UPDATE
    updateJoke: (req,res) =>{
        Joke.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err));
    },
    // DELETE

    deleteJoke: (req,res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(deletedJoke => res.json(deletedJoke))
            .catch(err => res.json(err));
    }
}