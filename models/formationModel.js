const mongoose = require ('mongoose')

const formationSchema = new mongoose.Schema({
    Nom : {
        type : String
    },
    Date : {
        type : Number
    },
    Formation : {
        type : String,
    }
})

const Formation = mongoose.model('Formation', formationSchema)
module.exports = Formation