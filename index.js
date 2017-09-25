const express = require('express');
const app = express();
app.use(express.static(__dirname + '/wwwroot'));

var options = { root: __dirname + '/wwwroot'}

app.listen(5000, function(){
    console.log('Listening on port 5000!')
});

app.get('/keaevents', function(req, res){
    res.sendFile('/keaevents.html', options);
});

app.get('/', function(req, res){
    res.sendFile('/keaevents.html', options);
});

app.get('/about', function(req, res){
    res.sendFile('/about.html', options);
});

