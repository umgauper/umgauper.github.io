
var debug = require('debug')('my-application');
var app = require('../app');

var port =  process.env.PORT || 3000;
console.log(port);
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

app.get('/', function(req, res) {
	res.send('hello world!');
});
