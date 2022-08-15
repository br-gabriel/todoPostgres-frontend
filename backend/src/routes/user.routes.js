const express = require("express");
const { PrismaClient } = require("@prisma/client");

const userRoutes = express.Router();
const prisma = new PrismaClient();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRoutes.post("/user/signup", async (req, res) => {
    const { email, password } = req.body;

    const userExists = await prisma.user.findUnique({
        where: {email}
    });

    if (userExists) {
        return res.status(422).json({error: "Email já está em uso"});
    };

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword,
        },
    });

    return res.status(201).json(user);
});

userRoutes.post("/user/signin", async (req, res) => {
    const { email, password } = req.body;

    const userExists = await prisma.user.findUnique({
        where: {email}
    });

    if (!userExists) {
        return res.status(422).json({error: "Email não encontrado"});
    };

    const checkPassword = await bcrypt.compare(password, userExists.password);

    if (!checkPassword) {
        return res.status(422).json({error: "Senha inválida"})
    }

    try {
        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: userExists.id,
            },
            secret,
            {expiresIn: '8h'}
        );

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
    } catch {
        res.status(500).json({erro: "Erro interno do servidor, tente mais tarde"});
    }
});

module.exports = userRoutes;