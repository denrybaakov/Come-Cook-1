require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use()


app.get('/', async (req, res) => {
  
  res.render('')
});



app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
