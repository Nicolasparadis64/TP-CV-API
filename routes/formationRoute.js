const express = require ('express')
const router = express.Router()
const Formation = require ('../models/formationModel')

router.get ('/formation', async (req, res) => {
    const formations = await Formation.find()
    res.json(formations)
})

router.post('/formation', async (req, res) => {
    const formation = req.body
    const newFormation = await Formation.create(formation)
    res.json(newFormation)
})

router.delete('/formation/:id', async (req, res) => {
    try {
        const { id } = req.params
        
        const deleteFormation = await Formation.findByIdAndDelete(id)
        if (!deleteFormation) {
            return res.status(404).json({message : 'formation not found'})
        }
        res.json({message : `La formation ${Formation}`})
    } catch(error) {
        res.status(500).json({error : error.message})
    }
})

module.exports = router