const express = require('express');
const router = express.Router();
const langueModel = require('../models/langue');

router.get("/langue", async (req, res) => {
    const langues = await langueModel.find();
    res.json(langues);
});

router.post('/langue', async (req, res) => {
    const langue = req.body;
    const newLangue = await langueModel.create(langue);
    res.json(newLangue);
});

router.delete('/langue/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deleteLangue = await langueModel.findByIdAndDelete(id);
        if (!deleteLangue) {
            return res.status(404).json({ message: 'Competence not found' });
        }
        res.json({ message: `La Langue '${langueModel.skill}' a été supprimée` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
