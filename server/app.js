require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const WebSocket = require('ws');

const authRouter = require('./routes/authRouter');
const index = require('./routes/indexRouter');
const orders = require('./routes/ordersRouter');
const map = new Map();

const app = express();

//SOCKET
const http = require('http');
const { Server } = require("socket.io");

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: true,
}));

const sessionParser = session({
  name: 'sid',
  store: new FileStore({}),
  saveUninitialized: false,
  secret: 'dsmkalmdkl',
  resave: false,
})
app.use(sessionParser);

app.use('/', index);
app.use('/orders', orders);
app.use('/auth', authRouter);

const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });


server.on('upgrade', function (request, socket, head) {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
 
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });
});

wss.on('connection', function (ws, request) {
  const userId = request.session.user.id
  const name = request.session.user.name

  map.set(userId, ws);

  ws.on('message', function (message) {
    //
    // Here we can now use session parameters.
    //
    console.log(`Received message ${message} from user ${userId}`);
    for(const [userId, wsClient] of map){
      wsClient.send(`${name} : ${message}`)
    }
  });

  
});


server.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
