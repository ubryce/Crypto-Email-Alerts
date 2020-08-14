const express = require('express');
const morgan = require('morgan');
const bodayParser = require('body-parser');
const cors = require('cors')

// config .env to ./config/config.env
require('dontenv').config({
    path: './config/config.env'
})
const app = express()

const PORT = process.env.PORT

app.listem(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
});
