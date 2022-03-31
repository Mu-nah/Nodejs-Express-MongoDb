const express = require('express');
const router = express.Router();
const Blog = require('../modules/blog');

router.get('/add-blog', (req, res)=>{
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'more about my new blog',
  });
  blog.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err); })
});

router.get('/all-blog', (req, res) => {
  Blog.find()
  .then((result)=>{
    res.send(result)
  })
  .catch((err) =>  {
    console.log(err);  })
  });
  router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result => {
      res.render('details', { blog:result, title:'Blog Details'})
    }) )
    .catch((err) => { 
      console.log(err);
      })
  });
  
  router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({redirect: '/blogs'})
    })
    .catch(err => { console.log(err);})
  });
  router.get('/single-blog', (req, res) => {
    Blog.findById('624188ff96262c76a6b1725e')
    .then((result) => {
      res.send(result)
    })
    
    .catch((err) => {
      console.log(err);})
  })
  

router.get('/blog', (req, res)=>{
  Blog.find().sort({createdAt: - 1})
  .then((result)=>{
   res.render('index', {title: 'All blogs', blogs: result})
  })
  .catch((err)=>{
    console.log(err)
  });
});
module.exports = router; 