const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
router.post('/send-verification-code', async (req, res) => {
    try {
        const { useremail } = req.body;
        console.log("user email: ", useremail);
        const verificationCode = Math.floor(1000 + Math.random() * 9000);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sohaibsipra869@gmail.com',
                pass: 'hfzr tmpg meug yskb',
            },
        });

        const mailOptions = {
            from: 'sohaibsipra869@gmail.com',
            to: useremail,
            subject: 'Verification Code',
            text: `Your verification code is: ${verificationCode}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("code:",verificationCode)
        res.status(200).json({
            message: 'Verification code sent successfully',
            verificationCode: verificationCode, 
        });
    } catch (error) {
        console.error('Error sending verification code:', error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

module.exports = router;