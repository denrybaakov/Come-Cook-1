const WebSocket = require('ws');
const { createServer } = require('http');
const { app, sessionParser } = require('./app');

const PORT = process.env.PORT || 3000;

const server = createServer(app);

const wsServer = new WebSocket.Server({ noServer: true, clientTracking: false })

const map = new Map();

server.on('upgrade', (request, socket, head) => {
  console.log('HandShake...');

  sessionParser(request, {}, () => {
    if (!request.session.userId) {
      socket.write('Status 401 Unauthorized...');
      socket.destroy();
      return
    }
    console.log("Session is parsed...");

    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit('connection', ws, request)
    })
  })
})

wsServer.on('connection', (ws, request) => {
  const { userId, userName } = request.session;
})

map.set(userId, ws);





ws.on('message', async (message) => {
  const parsedMessage = JSON.parse(message);
  switch (parsedMessage.type) {
    case 'USER_CONNECTED':

    if(client.readyState === WebSocket.OPEN) {
      map.forEach((client) => {
        client.send(JSON.stringify({ type: parsedMessage.type, payload: { user: userName } }))
      })
    }




      break;

    default:
      break;
  }
})

server.listen(PORT, () => { console.log('WS server has been started!'); })
