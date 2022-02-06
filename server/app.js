require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;
var session = require('express-session');
var FileStore = require('session-file-store')(session);

const authRouter = require('./routes/authRouter');


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

app.use('/auth', authRouter);








app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
