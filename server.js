var connect = require('connect');
var bodyParser = require('body-parser');
var http = require('http');
var process = require('process');
const PORT = process.env['PORT'];

function handleRequest(request, response) {
  var body = request.body;
  response.end('It Works!! Path Hit: ' + request.url + "\nbody: " + JSON.stringify(body));
}

var app = connect();
app.use(bodyParser.urlencoded({extended: false}));
app.use(handleRequest);
http.createServer(app).listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
