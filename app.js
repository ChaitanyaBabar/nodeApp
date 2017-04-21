var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uristring = 'mongodb://localhost/bookstore';

app.use( bodyParser.json() );

var Genre = require('./models/genres.js');
var Books = require('./models/books.js');


mongoose.connect('mongodb://localhost/bookstore',function( error , sucess){
	if (error) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + error );
      } else {
      console.log ('Succeeded connected to: ' + uristring);
	  }
});

var db = mongoose.connection;

app.get('/',function(req, res){
	res.send('Hii this is test Data');
});

// Get genre
app.get('/api/genres/',function(req,res){
	Genre.getGenres(function( err,customergenres){
		if(err){
			throw err;
		}
		res.json( customergenres)
	});
});

// Post genre
app.post('/api/genres/',function(req,res){
	var genre = req.body;
	Genre.addGenre( genre ,function( err,genre){
		if(err){
			throw err;
		}
		res.json(genre)
	});
});

//Put Genres
app.put('/api/genres/:_id' , function(req,res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre( id , genre ,{} , function( err , genre ){
		if( err ){
			throw err;
		}
		res.json(genre);
	}); 
});

//Delete Genres
app.delete('/api/genres/:_id' , function(req,res){
	var id = req.params._id;
	Genre.removeGenre( id ,function( err , genre ){
		if( err ){
			throw err;
		}
		res.json(genre);
	}); 
})


// Get Books
app.get('/api/books/',function(req,res){
	Books.getBooks(function( err , customerBooks){
		if(err){
			throw err;
		}
		res.json( customerBooks );
	});
});

// Get Books by Id
app.get('/api/books/:_id',function(req,res){
	Books.getBookbyId(req.params._id ,function( err , customerBook){
			if(err){
				throw err;
			}
			res.json(customerBook);
	});
})

// Add Books 
app.post('/api/books/' , function(req,res){
	var book = req.body;
	Books.addBook(book,function( err , book ){
		if(err){
			throw err;
		}
		res.json(book);
	});
})


// Update Books
app.put('/api/books/:_id',function(req,res){
	var id = req.params._id;
	var book = req.body;
	Books.updateBook(id, book , {} , function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	})
})

app.listen(3000);
console.log("Listening on port 3000!!!");