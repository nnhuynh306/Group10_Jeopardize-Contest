const express = require('express');
const hbs = require('express-handlebars');
var data = require('./data')
var app = express();

app.engine('hbs', hbs({
    extname :"hbs",
    defaultLayout: 'layout',
    layouDir: __dirname+ '/view/layouts',
    partialsDir: __dirname + 'view/partials'
}));

app.set('view engine', 'hbs');

app.get("/",function(req,res){
    res.render("home");
})
app.get('/task4.htm', function(req,res){
    res.locals.list = data.zodiacs;
    res.render('task4');
})
app.get('/task4-details.htm', function(req,res){
    res.render('task4-details');
})

app.listen(5000,function(){
    console.log("listen port 5000")
})