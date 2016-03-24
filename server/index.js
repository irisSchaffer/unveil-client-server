var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client/'));

var lastState = [];

Array.prototype.equals = function (other) {
  const deepEqual = (a, b) => {
    if(a.length === 0 || b.length === 0) return true;
    return (a[0] === b[0]) && deepEqual(a.slice(1), b.slice(1));
  };

  return this.length === other.length && deepEqual(this, other);
};

io.on('connection', function(socket) {
  console.log('new client');
  if (lastState) {
    socket.emit('state:initial', lastState);
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
      if (lastState.equals(data)) return;

      lastState = data;
    }

    console.log('broadcasting', event, data);
    io.emit(event, data);
  });
});

server.listen(9000, function () {
  console.log('Unveil server listening on port 9000!');
});
