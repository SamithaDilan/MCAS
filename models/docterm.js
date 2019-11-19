var mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var docm = new Schema({

    pname:{type:String},

    disease:{type:String},

    mname:  {type:String},


    weight: {type:Number},

    quantity:{type:String},
    quantity1:{type:String},
    

});


module.exports = mongoose.model("docter",docm);