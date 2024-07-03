const mongoose = require('mongoose');

const competenceSchema = new mongoose.Schema({
    skill: {
        type: String,
    }
});

const Competence = mongoose.model('Competence', competenceSchema);
module.exports = Competence;
