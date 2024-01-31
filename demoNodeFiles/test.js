var http = require("http");
var dt = require("./module");

// create a server object
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // if it needs to be displayed as html add a header or correct content type
    res.write("The date and time are currently " + dt.myDateTime()); // Write a response to client
    res.end(); // end the response
  })
  .listen(8080); // the server object listens on port 8080
