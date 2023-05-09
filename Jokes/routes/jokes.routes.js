const JokeController = require('../controllers/jokes.controller')

module.exports = app =>{
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);

    // Changes all values in the DB to match the req.body
    // app.put('/api/shows/:id', ShowController.updateShow);
    // Changes only the value in the req.body
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);


    
}