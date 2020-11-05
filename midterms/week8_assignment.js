var http = require("http");
var fs = require('fs');
const url = require("url");

http.createServer( function( request, response){
  var pathname = url.parse(request.url).pathname;
  const path = url.parse(request.url, true).pathname;
  console.log("request for "+pathname+" received");

  var order = fs.readFileSync(__dirname +'/orders.txt');

  if (path == '/vieworders.html') {
    fs.readFile(__dirname + '/vieworders.html', (err, data) => {

        if (err) {
    
          return console.error(err);
    
        }
        response.end(data+order, 'utf-8');
    })
  }
}).listen(8081);


//"<p><strong>No orders pending.<br />Please try again later.</strong></p>";


