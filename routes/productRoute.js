const express = require('express');
const medicamentController = require('../controllers/productController');

const router = express.Router();

router.post('/add', medicamentController.addMedicament);

router.get('/', medicamentController.getAllMedicaments);

router.get('/:id', medicamentController.getMedicamentById);

router.put('/:id', medicamentController.updateMedicament);

router.delete('/:id', medicamentController.deleteMedicament);

module.exports = router;