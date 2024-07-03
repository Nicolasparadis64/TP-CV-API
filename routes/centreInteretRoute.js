const express = require('express');
const router = express.Router();
const centreInteretShema = require ('../models/centreInteretModel')

router.get ('/centreInteret', async (req,res) => {
    const centreInterets = await centreInteretShema.find();
    res.json(centreInterets) 
})

router.post ('/centreInteret', async (req, res) => {
    const centreInteret = req.body;
    const newCentreInteret = await centreInteretShema.create(centreInteret);
    res.json(newCentreInteret)
})

router.delete('/centreInteret/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteCentreInteret = await centreInteretShema.findByIdAndDelete(id);
        if (!deleteCentreInteret) {
            return res.status(404).json({message : "CentreInteret not found"})
        }
        res.json({message: `Le centre d'interet ${centreInteretShema.interet} a été supprimé`})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;