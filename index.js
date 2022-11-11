//Global Requirements
require('dotenv').config()
const express = require('express')
const app = express()

//Epress settings / Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.listen(process.env.PORT)
console.log(`listening on port ${process.env.PORT}`)