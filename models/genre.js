var mongoose = require('mongoose');


//Genre Chema
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
create_date:{
	type: Date,
	default: Date.now
}

});

var Genre = module.exports = mongoose.model('Genre',genreSchema);


//Get Genres
module.exports.getGenres = function(callback,limit){
Genre.find(callback).limit(limit);
}


//Add Genre
module.exports.addGenres = function(genre,callback){
Genre.create(genre,callback);


//Update Genre
module.exports.updateGenres = function(id,genre,option,callback){
var query = {_id:id};
var update ={
	name: genre.name
}
Genre.findOneAndUpdate(query,update,option,callback);
}
}