import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import userSchema from '../models/userSchema.js';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existUser = await userSchema.User.findOne({ email });

        if (!existUser) return res.status(404).json({
            message: "Usuario não encontrado"
        });

        const verifyPassword = await bcrypt.compare(password, existUser.password);

        if (!verifyPassword) return res.status(400).json({
            message: "Credenciais inválidas"
        });

        const token = jwt.sign({
            email: existUser.email, id: existUser._id
        }, 'AQUI TEM QUE IR A PALAVRA DO TOKEN', { expiresIn: "12h" });

        res.status(200).json({
            result: existUser, token
        });

    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

export const register = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) {
            return res.status(400).send;
        }

        const user = await userSchema.User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({ message: "Email já registrado" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new userSchema.User({ ...req.body, password: hashPassword }).save();
        res.status(201).json({ message: "Usuario criado com sucesso" });

    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
};