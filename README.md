# Mongoose findOneOrFailPlugin
Tiny mongoose plugin which adds findOneOrFail method to a model. 
The method throws an error if no result is found.

## Use case with express
    app.get('/models/:id', (req, res, next) => {
        MongooseModel
            .findOneOrFail({
                id: req.params.id
            })
            .then(model => res.send(model))
            .catch(next);
    });