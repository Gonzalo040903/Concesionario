const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000;
let vehiculoArray = []

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());



app.get('/vehiculos', (req, res) => {
    res.send(JSON.stringify(vehiculoArray));
})


app.post('/vehiculos', (req, res) => {
    let vehiculo = req.body;
    console.log(req.body);
    vehiculoArray.push(vehiculo);
    res.send(JSON.stringify("Guardado"));
    console.log(vehiculoArray);
})

app.listen(port, () => {
    console.log(`estoy ejecutandome en localhost:${port}`)
})