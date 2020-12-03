const express = require('express');
const { partials } = require('handlebars');
const hbs = require('express-handlebars');
var app = express();

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}))

app.set('view engine', 'hbs');

app.listen(5000, () => {
    console.log('Server is listening as port 5000...');
})
