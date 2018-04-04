var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server.');


  socket.emit('createMessage', {
      from: 'Zach',
      text: 'Hello, there!'
  });
});


socket.on('disconnect', function () {
  console.log('Disconnected from the server.');
});