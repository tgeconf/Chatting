var socketio = {};
var socket_io = require('socket.io');
var chatcore = require('./model/chatcore');

//get io
socketio.getSocketio = function(server){
	var io = socket_io.listen(server);
	// Start chatroom app
  chatcore.init(io);
};

module.exports = socketio;