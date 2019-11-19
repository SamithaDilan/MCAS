var mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var mediSchema = new Schema({

    name:  {type:String,required:true},

    weight: {type:Number,required:true},

    quantity:{type:String,required:true}
    

});


module.exports = mongoose.model("phamacist",mediSchema);

// parameters are collection and scheema 








