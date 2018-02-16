const express = require('express');//include this, just like a php onclude
const app = express();
const io = require('socket.io')();

// serve up static files
app.use(express.static('public'));

// add routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));


const server = app.listen(3000, () => {
  console.log('listening on the port 3000');
});

io.attach(server);

io.on('connection', socket => { //function(socket) {...}
  console.log('a user has connected!');
  io.emit('chat message', { for : 'everyone', message : `${socket.id} has arrived` });

socket.on('chat message', msg =>{
  io.emit('chat message', {for : 'everyone', message : msg});
});

  socket.on('disconnect', () => {
    console.log("a user disconnected");
    io.emit('disconnect message', `${socket.id} has left`);
  });
});
