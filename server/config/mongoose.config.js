    const mongoose = require('mongoose');

    //para conectarnos o crear la BD
    mongoose.connect('mongodb://localhost/moduladodb', { useNewUrlParser: true });

    module.exports = mongoose;