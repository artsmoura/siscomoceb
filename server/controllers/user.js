const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { User, validate } = require('../models/userSchema.js');

dotenv.config();

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existUser = await User.findOne({ email });

        if (!existUser) return res.status(404).json({
            message: "Usuario não encontrado"
        });

        const verifyPassword = await bcrypt.compare(password, existUser.password);

        if (!verifyPassword) return res.status(400).json({
            message: "Credenciais inválidas"
        });

        const token = jwt.sign({
            email: existUser.email, id: existUser._id
        }, process.env.JWTPRIVATEKEY, { expiresIn: "12h" });

        res.cookie('jwt', token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

        res.status(200).json({
            result: existUser, token
        });

    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

const register = async (req, res) => {


    try {

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "Email já registrado" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const dateFormat = req.body.dateNascimento.replace(/T\d{2}:\d{2}:\d{2}.\d{3}Z/g, '');

        const result = await User.create({ ...req.body, password: hashPassword, dateNascimento: dateFormat });

        const token = jwt.sign({
            email: result.email, id: result._id
        }, process.env.JWTPRIVATEKEY, { expiresIn: "12h" });


        res.status(200).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = { login, register };