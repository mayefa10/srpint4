'use strict';
const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
app.use(compression());
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.log(error));

app.listen(8008, () => console.log('El servidor se encuentra activo en el puerto 8008'));