const medicamentModel = require("../Models/medicament");

const addMedicament = async (req, res) => {
    try {
        const { name, price, description } = req.body;

        // Verification des champs obligatoires
        if (!name || price === undefined || !description) {
            return res.status(400).json({
                message: "Tous les champs sont obligatoires"
            });
        }

        // Verification du prix
        if (typeof price !== "number" || price <= 0) {
            return res.status(400).json({
                message: "Le prix doit etre un nombre positif"
            });
        }

        const medicament = new medicamentModel({
            name,
            price,
            description
        });

        await medicament.save();

        res.status(201).json(medicament);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAllMedicaments = async (req, res) => {
    try {
        const medicaments = await medicamentModel.find();

        res.status(200).json(medicaments);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getMedicamentById = async (req, res) => {
    try {
        const { id } = req.params;

        const medicament = await medicamentModel.findById(id);

        if (!medicament) {
            return res.status(404).json({
                message: "Medicament introuvable"
            });
        }

        res.status(200).json(medicament);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const updateMedicament = async (req, res) => {
    try {
        const { id } = req.params;

        const medicament = await medicamentModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!medicament) {
            return res.status(404).json({
                message: "Medicament introuvable"
            });
        }

        res.status(200).json(medicament);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const deleteMedicament = async (req, res) => {
    try {
        const { id } = req.params;

        const medicament = await medicamentModel.findByIdAndDelete(id);

        if (!medicament) {
            return res.status(404).json({
                message: "Medicament introuvable"
            });
        }

        res.status(200).json({
            message: "Medicament supprime avec succes"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    addMedicament,
    getAllMedicaments,
    getMedicamentById,
    updateMedicament,
    deleteMedicament
};