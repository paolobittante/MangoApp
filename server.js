var index = require('./routes/index');
var items = require('./routes/items');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 4000;
var app = express();

//Vista motore
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// setto cartella statica per codice client
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', items);

app.listen(port, function(){
    console.log('Server started on port '+port);
});