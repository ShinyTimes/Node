const express = require('express');
const app = express();
const path = __dirname;

app.listen(5000, function(){
    console.log('Listening on port 5000!')
});

app.get('/keaevents', function(req, res){
    res.sendFile(path + '/keaevents.html', function(err){});
});