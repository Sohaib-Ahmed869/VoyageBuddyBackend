const express = require('express');
const router = express.Router();
const User = require('../Models/user'); 
const authenticatetoken =require('../Authentication/authenticateToken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/change-password', authenticatetoken, async (req, res) => {
    try {
        const { newPassword } = req.body;
        console.log("new pass: ", newPassword);

        const user = await User.findById(req.userData.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Check if the new password is the same as the old password
        if (await bcrypt.compare(newPassword, user.password)) {
            return res.status(400).json({ error: 'New password must be different from the old password' });
        }

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;
