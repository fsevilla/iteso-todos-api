const express = require('express');

const rutas = require('./routes');

const app = express();

app.use('', rutas);

app.get('', (req, res) => {
    res.send('api works!');
});


app.listen(3000, () => {
    console.log('app is running...');
});