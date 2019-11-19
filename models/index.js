const mongoose = require('mongoose');

const userDataSchema = mongoose.Schema({
  reg_no:{type : String , required : true ,  unique: true ,uppercase: true},
  info: [{ 
    date: { type :Date , required : true},
    feaver : { type :Number , required : true},
    sickness : { type :Array , required : true},
    prescription : { type :Array , required : true},
    _id : false}]
},{collection: 'sickinfo'});

//module.exports = mongoose.model('UserData',userDataSchema) ;


const tempSchema = mongoose.Schema({
  reg_no:{type : String , required : true ,  unique: true ,uppercase: true},
  info: [{ 
    date: { type :Date , required : true},
    feaver : { type :Number , required : true},
    sickness : { type :Array },
    prescription : { type :Array },
    _id : false}]
},{collection: 'temp'});

//module.exports = mongoose.model('tempUser',tempSchema) ;



const UserData = mongoose.model('UserData',userDataSchema) ;
const tempUser =  mongoose.model('tempUser',tempSchema) ;

module.exports = { UserData: UserData, tempUser: tempUser }