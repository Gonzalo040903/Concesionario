const express = require('express');
const cor = require('cors');

const app = express()
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.get('/prueba', (req, res) => {
    res.send('Hola estoy funcando')
})

app.listen(port, () => {
    console.log(`estoy ejecutandome en localhost:${port}`)
})