const express = require('express')
const router = express.Router()
const contactSchema = require('../models/contactModel')

router.get('/contact',async (req, res) => {
    const contact = await contactSchema.find()
    console.log(contact);
    res.json(contact)
})

router.post('/contact', async (req, res) => {
    const newContact = contactSchema( req.body)
    await contactSchema.deleteOne()
    await contactSchema.find()
    // console.log(contact);
    await contactSchema.create(newContact)
    res.json(newContact)
})

module.exports = router