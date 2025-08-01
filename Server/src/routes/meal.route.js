const express = require('express');
const router = express.Router();
const mealController = require('../controllers/meal.controller');

router.get('/', mealController.getAllMeals);

router.post('/', mealController.addMeal);

router.delete('/:id', mealController.deleteMeal);

module.exports = router;
