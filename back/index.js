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