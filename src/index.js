const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
// Error Handler => Middleware Express
app.use(errorHandler);

app.listen(3001, () => console.log('🤪 Server stated at http://localhost:3001'));
