const express = require('express');
const v1workOutRouter = require('./v1/routers/workOutRoutes');


const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use('/api/v1/workouts', v1workOutRouter);

app.listen(port, () => { console.log('Servidor escuchando en el puerto ' + port) });
