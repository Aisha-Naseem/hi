const express = require('express');
const Pizza = require('./models/pizzaModel');
const db = require('./db');
const app = express();
app.use(express.json());

const pizzasRoute = require('./routes/pizzaRoutes');
app.use('/api/pizzas', pizzasRoute);
app.get('/', (req, res) => {
  res.send('Server Working');
});

const port = process.env.PORT || 6000; // Correct the capitalization of "PORT"
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
