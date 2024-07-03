const mongoose = require ('mongoose')

const experienceSchema = new mongoose.Schema ({
    Nom : {
        type : String
    },
    Date : {
        type : Number
    },
    experience : {
        type : String,
    }
})

const Experience = mongoose.model('Experience', experienceSchema)
module.exports = Experience