const mongoose = require('mongoose');

const centreInteretSchema = new mongoose.Schema({
    description: {
        type: String,
    }
});

const centreInteret = mongoose.model('centreInteret', centreInteretSchema);
module.exports = centreInteret;
