const express = require('express');
const router = express.Router();
const Competence = require('../models/competenceModel');

router.get("/competence", async (req, res) => {
    const competences = await Competence.find();
    res.json(competences);
});

router.post('/competence', async (req, res) => {
    const competence = req.body;
    const newCompetence = await Competence.create(competence);
    res.json(newCompetence);
});

router.delete('/competence/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCompetence = await Competence.findByIdAndDelete(id);
        if (!deletedCompetence) {
            return res.status(404).json({ message: 'Competence not found' });
        }
        res.json({ message: `La compétence '${Competence.skill}' a été supprimée` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
