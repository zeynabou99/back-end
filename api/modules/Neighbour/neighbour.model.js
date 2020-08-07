(function() {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var neighbourSchema = new Schema({
        nom: { type : String, required : true},
        email: { type : String, required : true},
        password: { type : String, required : true},
        numero: { type : String, required : true},
        about: { type : String, required : true},
        adresse: { type : String, required : true},
        favorit: { type : String, required : false}
    });

    module.exports = {
        neighbourModel : mongoose.model('Neighbour', neighbourSchema)
    }
})();
