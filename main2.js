const express = require('express');
const { partials } = require('handlebars');
const hbs = require('express-handlebars');
const { json } = require('express');
var app = express();

app.use(express.static("./"))

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}))


app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/index.htm', function(req, res) {
    res.render('index');
})

app.get('/task2', function(req, res) {
    var data = {
        emotions :[
            {
                title: 'happy',
                imagePath: '/task2/happy.jpeg',
                quotePath: '/task2/happy/happy1.jpg'
            },
            {
                title: 'sad',
                imagePath: '/task2/sad.jpeg',
                quotePath: '/task2/sad/sad1.jpg'
            },
            {
                title: 'stress',
                imagePath: '/task2/stress.jpeg',
                quotePath: '/task2/stress/stress1.jpg'
            },
            {
                title: 'angry',
                imagePath: '/task2/angry.jpeg',
                quotePath: '/task2/angry/angry1.jpg'
            }
          ]
        }
    res.render('task2',{
        emotions: data.emotions,
        quotePath: '/task2/default.jpg'
    })
})

app.get('/task2/:title', function(req, res) {
    var data = {
        emotions :[
            {
                title: 'happy',
                imagePath: '/task2/happy.jpeg',
                quotePath: '/task2/happy/happy1.jpg'
            },
            {
                title: 'sad',
                imagePath: '/task2/sad.jpeg',
                quotePath: '/task2/sad/sad1.jpg'
            },
            {
                title: 'stress',
                imagePath: '/task2/stress.jpeg',
                quotePath: '/task2/stress/stress1.jpg'
            },
            {
                title: 'angry',
                imagePath: '/task2/angry.jpeg',
                quotePath: '/task2/angry/angry1.jpg'
            }
          ]
        }
    let quotePath = '';
    for (let emotion of data.emotions){
        if (emotion.title === req.params.title){
            quotePath = emotion.quotePath;
            break;
        }
    }
    res.render('task2',{
        emotions: data.emotions,
        quotePath: quotePath
    })
})



app.listen(5000, () => {
 
    console.log('Server is listening as port 5000...');
})

