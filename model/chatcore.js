// model/chatcore.js
var chatcore = {};

/**
 * chatroom app
 */
chatcore.init = function(io) {
  io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg){
    	console.log("message : " + msg);
      io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
};

module.exports = chatcore;