const mongoose = require('mongoose');

const userSchema =mongoose.Schema(
    {
        nombre : {
            type:String,
            required:true
        },
        apellido : {
            type:String,
            required:true
        },
        correo_electrónico : {
            type:String,
            required:true,
            unique:[true,'No se pueden registrar dos usuarios con el mismo email']
        },
        contraseña : {
            type:Number,
            required:true,
            min:[8, "La contraseña debe contener mínimo de 8 carácteres"],
            max:[16, "La contraseña debe contener máximo 12 carácteres"]
        },
        confirmar_contraseña : {
            type:String,
            required:true,
            min:[8, "La contraseña debe contener mínimo de 8 carácteres"],
            max:[16, "La contraseña debe contener máximo 12 carácteres"]
        }
    } 
);

module.exports = mongoose.model('User', userSchema);