var mongoose = require('mongoose');

// Create Schema for Genres

var genreSchema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
 
var Genre = module.exports = mongoose.model('genres',genreSchema);

// Get Genre
module.exports.getGenres = function( callback , limit ){
	Genre.find(callback).limit(limit);
}
// Post Genre
module.exports.addGenre = function( genre , callback){
	Genre.create( genre ,callback );
}

//Update Put Genre
module.exports.updateGenre = function( id , genere , options, callback){
	var query = {_id: id};
	var update = {
		name: genere.name
	}
	Genre.findOneAndUpdate( query, update, options ,callback)
}

//Remove Genre
module.exports.removeGenre = function( id , callback){
	var query = {_id: id};
	Genre.remove( query,callback)
}