const mealService = require('../services/meal.service');

exports.getAllMeals = async (req, res) => {
  const meals = await mealService.getAllMeals();
  res.json(meals);
};

exports.addMeal = async (req, res) => {
  const newMeal = await mealService.addMeal(req.body);
  res.status(201).json(newMeal);
};

exports.deleteMeal = async (req, res) => {
  const { id } = req.params;
  await mealService.deleteMeal(id);
  res.status(204).send();
};
