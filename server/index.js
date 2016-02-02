var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client/'));

var lastState = [];

io.on('connection', function(socket) {
  console.log('new client');
  if (lastState) {
    socket.emit('state:change', lastState);
  }

  var onevent = socket.onevent;
  socket.onevent = function (packet) {
    var args = packet.data || [];
    onevent.call (this, packet);    // original call
    packet.data = ['*'].concat(args);
    onevent.call(this, packet);     // additional call to catch-all
  };

  socket.on('*', function(event, data) {
    if (event === 'state:change') {
      lastState = data;
    }

    console.log('broadcasting', event, data);
    io.emit(event, data);
  });
});

server.listen(3000, function () {
  console.log('Unveil server listening on port 3000!');
});