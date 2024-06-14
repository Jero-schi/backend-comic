const express = require('express')
const bodyParser = require('body-parser')
const mongooseConnection = require('./config/db')
const commentRouter = require('./routes/comment')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use('/comment', commentRouter)

app.get('/', (req,res) => {
    res.send('Backend funcionando')
})

app.listen(PORT, () =>{
    console.log('servidor escuchando');
})