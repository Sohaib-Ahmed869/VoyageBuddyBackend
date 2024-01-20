const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const UserRouter = require('./Routes/user');
const ContactUs = require('./Routes/ContactUs');
const ChangePassword = require('./Routes/ChangePassword');
const CodeVerification = require('./Routes/CodeVerification');
const ForgotPass = require('./Routes/ForgotPassword');
const Trips = require('./Routes/Trips');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors(
    {
        origin: '*'
    }
));
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/user', UserRouter);
app.use('/user', ContactUs);
app.use('/user', CodeVerification);
app.use('/user', ChangePassword);
app.use('/user', ForgotPass);
app.use('/trips', Trips);

mongoose.connect('mongodb+srv://sohaibahmedsipra:nvidia940MX@cluster0.3jtgifa.mongodb.net/')

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
        console.log('Server started on port ' + process.env.PORT);
    }
);
