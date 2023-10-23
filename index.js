const express = require('express');
const mongoose = require('mongoose');

const rutas = require('./routes');

const app = express();

app.use('', rutas);

app.get('', (req, res) => {
    res.send('api works!');
});

const mongoUrl = '';

mongoose.connect(mongoUrl).then(() => {
    app.listen(3000, () => {
        console.log('app is running...');
    });
}).catch(err => {
    console.log('No se pudo conectar a la base de datos', err);
})
