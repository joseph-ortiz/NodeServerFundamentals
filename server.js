var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Hello World');
});

app.get('/jedi/:firstname/:lastname', function(request, response){
	var first = request.params.firstname.slice(0,2);
	var last = request.params.lastname.slice(0,3);
	response.json({message: "Hello " + last +  first});
});

app.listen(3000);
