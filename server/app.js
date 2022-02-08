require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const authRouter = require('./routes/authRouter');
const index = require('./routes/indexRouter');
const orders = require('./routes/ordersRouter');
const povars = require('./routes/povarRouter');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  credentials: true,
    origin: true,
}));
app.use(
  session({
    name:'sid',
    store: new FileStore({}),
    saveUninitialized: false,
    secret: 'dsmkalmdkl',
    resave: false,
  })
);

app.use('/', index);
app.use('/orders', orders);
app.use('/auth', authRouter);
app.use('/povars', povars);

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
