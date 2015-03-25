
var debug = require('debug')('my-application');
var app = require('../app');

//app.set('port', process.env.PORT || 3000);

app.listen(process.env.PORT);//var server = app.listen(app.get('port'), function() {
  //console.log('Express server listening on port ' + server.address().port);
//});

app.get('/', function(req, res) {
	res.send('hello world!');
});
