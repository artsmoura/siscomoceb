// import mongoose from "mongoose";
// import Joi from "joi";

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     id: { type: String }
// });

// const User = mongoose.model("User", userSchema);

// const validate = (user) => {
//     const schema = Joi.object({
//         firstName: Joi.string().required().label("Nome"),
//         lastName: Joi.string().required().label("Sobrenome"),
//         email: Joi.string().email().required().label("Email"),
//         password: Joi.string().required().label("Senha")
//     });
//     return schema.validate(user);
// };

// module.exports = { User, validate };

// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const Joi = require('joi');

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        default: new Date()
    },
    cpf: {
        type: String,
        required: true
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("name"),
        lastName: Joi.string().required().label("sobrenome"),
        email: Joi.string().email().required().label("email"),
        cpf: Joi.string().email.required().label('cpf'), //AQUI TEM QUE DEPOIS COLOCAR O PATTERN DO CPF
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).label("password"),
        passwordConfirm: Joi.ref('password'),
        dataNascimento: Joi.date().required().label("dateNascimento")
    });
    return schema.validate(data);
};

export default Object.freeze({ User, validate });