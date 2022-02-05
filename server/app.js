require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
const index = require('./routes/indexRouter');
const orders = require('./routes/ordersRouter');

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  
  res.render('')
});

app.use('/', index);
app.use('/orders', orders);

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
