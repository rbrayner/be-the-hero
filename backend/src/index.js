const express = require ('express');
const cors = requre('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);
/**
 * Rota / Recurso
 */


app.listen(3333);

