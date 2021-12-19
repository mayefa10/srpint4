const express = require('express');
const userSchema = require('../models/user');
const router = express.Router();

router.post('/create', (pet, res) => {
    const user = userSchema(pet.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
});

router.get('/browse', (pet, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
});

router.get('/view/:id', (pet, res) => {
    const { id } = pet.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
});

router.put('/update/:id', (pet, res) => {
    const { id } = pet.params;
    const { nombre, apellido, correo_electrónico,contraseña, confirmar_contraseña} = pet.body;
    userSchema
        .updateOne({_id:id},{$set:{apellido, correo_electrónico,contraseña, confirmar_contraseña}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
});

router.delete('/delete/:id', (pet, res) => {
    const { id } = pet.params;
    userSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
});

module.exports = router;