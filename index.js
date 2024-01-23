require('dotenv').config();
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req,res) => {
  res.send('Hello Arghya');
})

app.get('/arghya',(req,res) => {
  res.send('<h1>I am all ears</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`App is listening on ${process.env.PORT}`)
})