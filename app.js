 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); 
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const dbURI = 'mongodb+srv://Munah:Muna08102@nodetest.57edd.mongodb.net/NodeTest?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(app.listen(3000,()=>{
  console.log('connected to db') }))
.catch((err) => console.log(err));



app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('sill'));

app.get('/', (req, res) => {
  const blogs = [
   {title:'What if I no come succeed nko?', snippet:'God will see me through sha.'}, 
{title:'If I no make am eh', snippet:'God is all I have no.'},
 {title:"Don't panic", snippet:'God is not a man. He will finish what he started.'},
  ] 
//  res.send('<h1>Home Page.</h1>')
//res.sendFile('./views/index.html', {root:__dirname}); 
res.redirect('/blog'); 
  
});

app.get('/about', (req, res) => {
 // res.send('<h1>About page .</h1>')
//res.sendFile('./views/about.html', {root:__dirname}); 
res.render('about', {title: 'about'}); 
});
//app.get('/404', (req, res) => {
 // res.send('<p>Let me check something.</p>')
//res.sendFile('./views/404.html', {root:__dirname});
//});


app.get('/aboutus', (req, res) => {
  res.redirect('/about'); 
});

app.get('/create', (req, res) => {
  res.render('create', {title:'create blog'}); 
})

app.use((req,res) => {
//res.status(404). sendFile('./views/404.html', {roo:__dirname});
res.render('404', {title:'Error nah'}); 
})  
app.use(blogRoutes);