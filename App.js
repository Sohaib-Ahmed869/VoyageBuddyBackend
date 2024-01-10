const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const UserRouter = require('./Routes/user');
const app = express();
const cors = require('cors');
const env = require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/user', UserRouter);

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
    process.env.PORT || 3000, () => {
        console.log('Server started');
    }
);


