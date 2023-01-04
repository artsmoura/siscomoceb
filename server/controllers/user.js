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

        res.status(200).json({
            result: existUser, token
        });

    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

const register = async (req, res) => {
    try {
        /* const { error } = validate(req.body);
        if (error) {
            return res.status(400).send;
        } */

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({ message: "Email já registrado" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await User.create({ ...req.body, password: hashPassword });
        res.status(201).json({ message: "Usuario criado com sucesso" });

    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = { login, register };