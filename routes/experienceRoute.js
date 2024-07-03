const express = require ('express')
const router = express.Router()
const Experience = require ('../models/experienceModel')

router.get ('/experience', async (req, res) => {
    const experiences = await Experience.find()
    res.json(experiences)
})

router.post ('/experience', async (req, res) => {
    const experience = req.body 
    const newExperience = await Experience.create(experience)
    res.json(newExperience)
})

router.delete ('/experience/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deleteExperience = await Experience.findByIdAndDelete(id)
        if (!deleteExperience) {
            return res.status(400).json({message : 'Experience not found'})
        }
        res.json ({message : `L'experience ${Experience} a été supprimé`})
    } catch (error) {
        res.status(500).json ({error : error.message})
    }
})

module.exports = router