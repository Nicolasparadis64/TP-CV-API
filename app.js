require('dotenv').config({path: 'config.env'})
console.log(process.env.PORT);
const ContactRoute = require('./routes/contactRoute')
const CompetenceRoute = require('./routes/competenceRoute')
const mongoose = require('mongoose')
const langueRoute = require ('./routes/langue')
const express = require('express')
const CentreInteretRoute = require ('./routes/centreInteretRoute')
const experienceRoute = require ('./routes/experienceRoute')
const formationRoute = require ('./routes/formationRoute')

const cors = require('cors');
// const centreInteret = require('./models/centreInteretModel');

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('', experienceRoute)
app.use('', formationRoute)
app.use('', langueRoute)
app.use('', CompetenceRoute)
app.use('', ContactRoute)
app.use('', CentreInteretRoute)

app.listen(process.env.PORT, () => {
    console.log(`le serveur tourne sur le port ${PORT}`);
})

mongoose.connect(process.env.DB)
.then(() => {
    console.log(`Connexion à la base de données avec succées`);
})
.catch((error) => {
    console.log(error);
})
