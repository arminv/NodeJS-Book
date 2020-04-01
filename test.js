const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true
})

BlogPost.create({
    title: 'Hey there, this is my first ever post title! YAY',
    body: 'This is just a test! This is just a test! This is just a test! This is just a test!'
}, (error, blogpost) => {
    console.log(error, blogpost)
})

BlogPost.create({
    title: 'Hey there, this is my 2nd ever post title! YAY',
    body: 'This is just a test! This is just a test! This is just a test! This is just a test!'
}, (error, blogpost) => {
    console.log(error, blogpost)
})

BlogPost.create({
    title: 'Hey there, this is my 3rd ever post title! YAY',
    body: 'This is just a test! This is just a test! This is just a test! This is just a test!'
}, (error, blogpost) => {
    console.log(error, blogpost)
})
