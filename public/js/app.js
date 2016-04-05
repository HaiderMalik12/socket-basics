var socket = io();
// fire the connection event
socket.on('connect', function() {
    console.log('Connected to socket io server');
});
