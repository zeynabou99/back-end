(function() {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var imageSchema = new Schema({
        nom: { type : String, required : true},
        sound: { type : String, required : true},
        neighbour: { type : Schema.ObjectId, ref :'Neighbour', required : true},
        date: { type : Date, required : false},
        extension: { type : String, required : false}
    });

    module.exports = {
        imageModel : mongoose.model('image', imageSchema)
    }
})();
