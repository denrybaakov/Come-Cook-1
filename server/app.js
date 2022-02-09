require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const fileUpload = require('express-fileupload')
const path = require('path')

const authRouter = require('./routes/authRouter');
const index = require('./routes/indexRouter');
const orders = require('./routes/ordersRouter');
const uploadRouter = require('./routes/cookAvatarRouter')
const uploadRouterClient = require('./routes/clientAvatarRouter')


const app = express();

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())
app.use(morgan('dev'));
// app.use(express.json());
app.use(express.json({extended: true}))
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
app.use('/upload', uploadRouter)
app.use('/uploadClient', uploadRouterClient)

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
