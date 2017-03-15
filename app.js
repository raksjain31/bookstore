var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyparser.json());

Genre = require('./models/genre.js');
Book = require('./models/book.js');



//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('Please use 1/api/books or /api/genres');
});

app.get('/api/genres',function(req,res){
 Genre.getGenres(function(err,genres){
 	if(err){
 		throw err;

 	}
 	res.json(genres);
 });
});


app.post('/api/genres',function(req,res){
 var genre = req.body;
 Genre.addGenres(genre,function(err,genre){
 	if(err){
 		throw err;

 	}
 	res.json(genre);
 });
});


app.post('/api/books',function(req,res){
 var book = req.body;
 Book.addBook(book,function(err,book){
 	if(err){
 		throw err;

 	}
 	res.json(book);
 });
});




app.put('/api/genres/:_id',function(req,res){
 var id = req.params._id;
  var genre = req.body;
 Genre.updateGenres(id,genre,{} ,function(err,genre){
 	if(err){
 		throw err;

 	}
 	res.json(genre);
 });
});




app.put('/api/books/:_id',function(req,res){
 var id = req.params._id;
  var book = req.body;
 Genre.updatupdateBook(id,book,{} ,function(err,book){
 	if(err){
 		throw err;

 	}
 	res.json(book);
 });
});


app.get('/api/books', function(req, res){
 Book.getBooks(function(err, books){
 	if(err){ 
 		throw err;
 	}
 	res.json(books);
 });
});


app.get('/api/books/:_id', function(req, res){
 Book.getBookById(req.params._id,function(err, book){
 	if(err){ 
 		throw err;
 	}
 	res.json(book);
 });
});

app.listen(20171);
console.log('Running on Port 20171...');
