const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const UserRouter = require('./Routes/user');
const ContactUs = require('./Routes/ContactUs');
const ChangePassword = require('./Routes/ChangePassword');
const CodeVerification = require('./Routes/CodeVerification');
const ForgotPass = require('./Routes/ForgotPassword');

const app = express();
const cors = require('cors');
const env = require('dotenv').config();

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());

app.use('/user', UserRouter);
app.use('/user', ContactUs);
app.use('/user', CodeVerification);
app.use('/user', ChangePassword);
app.use('/user', ForgotPass);

mongoose.connect('mongodb://127.0.0.1:27017/voyagebuddy')

    .then(() => {
        console.log('Connected to database');
    }
    )
    .catch(() => {
        console.log('Connection failed');
    }
    );

app.listen(
    process.env.PORT, () => {
        console.log('Server started');
    }
);


