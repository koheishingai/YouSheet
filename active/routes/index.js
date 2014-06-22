var io    = require("socket.io").listen(8082)
 
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

io.sockets.on("connection", function (socket) {
  //some codes
});