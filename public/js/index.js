var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server.');


  socket.emit('createMessage', {
      from: 'Zach',
      text: 'Hellow, there!'
  });
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});


socket.on('disconnect', function () {
  console.log('Disconnected from the server.');
});