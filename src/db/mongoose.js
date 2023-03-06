const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/notes-api', {
    useNewParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});