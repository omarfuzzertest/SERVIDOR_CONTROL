const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('CONNECTED',{ connection: true })
  socket.on('CartesianCordianesController', (msg) => {
    console.log('adelante-> '+msg)
  });


  socket.on('CartesianCordianesCamera', (msg) => {
    console.log('camera-> '+msg)
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});