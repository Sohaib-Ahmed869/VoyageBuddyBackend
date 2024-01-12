const express = require('express');
const router = express.Router();
const ContactForm = require('../Models/ContactUsForm'); 
const authenticatetoken =require('../Authentication/authenticateToken');

router.post('/submit-contact-form',authenticatetoken, async (req, res) => {
    try {
       
        const { email, phone, subject, message } = req.body;
        const contactFormEntry = new ContactForm({
            user: req.userData.userId,
            email,
            phone,
            subject,
            message,
        });
        const result = await contactFormEntry.save();

        res.status(201).json({
            message: 'Contact form submitted successfully',
            result: result,
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

module.exports = router;
