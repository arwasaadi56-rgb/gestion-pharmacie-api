const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verification des champs obligatoires
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Tous les champs sont obligatoires"
            });
        }

        // Verification du format Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Format email invalide"
            });
        }

        // Verification du mot de passe
        if (password.length < 6) {
            return res.status(400).json({
                message: "Le mot de passe doit contenir au moins 6 caracteres"
            });
        }

        // Verification si Email existe deja
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email deja utilise"
            });
        }

        // Cryptage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "Utilisateur inscrit avec succes"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verification des champs obligatoires
        if (!email || !password) {
            return res.status(400).json({
                message: "Email et mot de passe obligatoires"
            });
        }

        // Recherche de l'utilisateur
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Utilisateur introuvable"
            });
        }

        // Verification du mot de passe
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Mot de passe incorrect"
            });
        }

        // Generation du JWT Token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Connexion reussie",
            token: token
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    register,
    login
};