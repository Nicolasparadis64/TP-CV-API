const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: String,
    email: {
        type: String,
        required: true
    },
    tel: String,
    adress: String
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
