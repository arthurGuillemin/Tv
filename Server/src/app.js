const express = require('express');
const cors = require('cors');
require('dotenv').config();

const movieRoutes = require('./routes/movie.routes');
const mealRoutes = require('./routes/meal.route')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/V1/movies', movieRoutes);
app.use('/api/V1/meals' , mealRoutes) ;

module.exports = app;
