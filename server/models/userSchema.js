const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const dotenv = require('dotenv');

dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sobrenome: {
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
    dateNascimento: {
        type: Date,
        default: new Date()
    },
    cpf: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    profileType: {
        type: String
    },
    church: {
        type: String
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "12h" });
    return token;
};

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