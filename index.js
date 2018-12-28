var http = require('http')
var socketio = require('socket.io'); 

var server = http.createServer();

var io = socketio(server, {
    path: '/',
    //serveClient: false,
    // below are engine.IO options
    pingInterval: 5000,
    pingTimeout: 3000,
    cookie: false,
});
server.listen(3000, () => console.log('listening on *:3000'));


io.on('connection', client => {
    var sessionID = client.id; 
    console.log('client connected: '+sessionID); 
    // Emitter
    io.emit('connected','Message');
    // ON
    client.on('disconnect', () => {console.log('client has left: '+sessionID)});
});


  