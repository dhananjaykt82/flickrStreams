var express 	= require('express'),
	compression = require('compression'),
	cors 		= require('cors'),
	app 		= express();

app.use(cors());
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/client/src'));
app.use(compression());


app.get('/', function(request, response) {
  response.sendFile('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Flickr Stream App is running on port', app.get('port'));
});

process.on('uncaughtException', function(err) {
    console.log('Uncaught exception: ' + err);
});


