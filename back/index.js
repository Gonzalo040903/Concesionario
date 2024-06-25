const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/vehiculos', { useNewUrlParser: true, useUnifiedTopology: true });

const vehiculoSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    year: Number,
    color: String,
    motor: [{
        combustible: String,
        motor: String
    }]
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/vehiculos', async (req, res) => {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
});

app.post('/vehiculos', async (req, res) => {
    const vehiculo = new Vehiculo(req.body);
    await vehiculo.save();
    res.json("Guardado");
});

app.listen(port, () => {
    console.log(`Estoy ejecutándome en localhost:${port}`);
});
