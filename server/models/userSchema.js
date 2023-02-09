const mongoose = require('mongoose');
const Joi = require('joi');
const dotenv = require('dotenv');

dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    sobrenome: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    dateNascimento: {
        type: Date,
        default: new Date()
    },
    cpf: {
        type: String,
        required: true
    },
    gender: String,
    profileType: String,
    church: String,
    image: String,
});

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("name"),
        lastName: Joi.string().required().label("sobrenome"),
        email: Joi.string().email().required().label("email"),
        cpf: Joi.string().required().label('cpf'), //AQUI TEM QUE DEPOIS COLOCAR O PATTERN DO CPF
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).label("password"),
        passwordConfirm: Joi.ref('password'),
        dataNascimento: Joi.date().required().label("dateNascimento")
    });
    return schema.validate(data);
};

module.exports = { User, validate };