const exp = require('constants');
const express = require('express');
const path = require('path');


const app = express();

//get path of public folder in our local mahine
const publicPath =path.join(__dirname, 'public');

app.use(express.static(publicpath));

console.log(__dirname)

app.listen(5002);