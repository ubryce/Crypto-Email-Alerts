const express = require('express');
const morgan = require('morgan');
const bodayParser = require('body-parser');

const app = express()


const PORT = process.env.PORT

app.listem(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
});
