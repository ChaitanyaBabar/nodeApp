var mongoose = require('mongoose');

// Create books Schema
var bookSchema = mongoose.Schema({
	title : {
		type: String,
		required: true
	},
	genre :{
		type : String
	},
	description:{
		type: String
	},
	author:{
		type: String,
		require: true
	},
	publisher: {
		type: String
	},
	pages:{
		type : Number
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	}
});

var Books = module.exports = mongoose.model('books',bookSchema);

module.exports.getBooks = function( callback , limit ){
	Books.find(callback).limit(limit);
}

module.exports.getBookbyId = function( book_id , callback){
	Books.findById( book_id , callback);
}

module.exports.addBook = function( book , callback){
	Books.create( book , callback );
}

module.exports.updateBook = function( id , book , options , callback){
	var query = {_id : id};
	var updateBook = {
		title : book.title,
		genre : book.genre,
		description : book.description,
		author : book.author,
		publisher : book.publisher,
		pages : book.pages,
		image_url : book.image_url,
		buy_url : book.buy_url
	}
	Books.findOneAndUpdate( query , updateBook , options , callback);
}

module.exports.removeBook = function( id , callback){
	var query = {_id: id};
	Books.remove( query,callback)
}