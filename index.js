module.exports = (schema, options) => {
    var options = Object.assign({}, options);

    schema.statics.findOneOrFail = function() {
        return this
            .findOne.apply(this, arguments)
            .exec()
            .then(doc => {
                if (doc) {
                    return doc;
                } else {
                    var err = new Error(options.NotFoundMessage || 'Not Found');
                    err.statusCode = 404;
                    throw err;
                }
            });
    };
};
