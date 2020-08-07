const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose');
let path= require('path');
//Files = require('./api/utils/Files)
require('dotenv').config();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

mongoose.connection.openUri(process.env.MONGO_URL, {}, err =>{
    if (err){
        console.log('MongoDB connection error', err);
        process.exit(1);
    }
    initApp();
})

//LOAD ROUTES
function initApp(){
    app.use(function (req, res, next){ 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'token, Content-Type, X-requested-With');
        res.setHeader('Access-Control-Allow-Credentials', true);
        if(req.method == 'OPTIONS') return res.sendStatus(200);
        next();
    });
    app.use(express.static(path.join(__dirname, 'public')));

    require('./api/modules/login/login.routes')(app)
    require('./api/modules/image/image.routes')(app)
    require('./api/modules/Neighbour/neighbour.routes')(app)

    app.use(function(req, res){
        res.status(404).send('OUPS PAGE INTROUVABLE')
    })

    var server = app.listen(process.env.NODE_PORT, function(){
        console.log("L'application tourne sur le port ", server.address().port)
    })
};