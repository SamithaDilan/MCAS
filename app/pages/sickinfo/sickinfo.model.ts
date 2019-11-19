export interface Sickinfo {
    reg_no : String ;
    info: [{ 
      date: { type :Date , required : true},
      feaver : { type : Number , required : true},
      sickness : { type : Array<any> , required : true},
      prescription : { type : Array<any> , required : true},
      _id : false}] ;
}


export interface Drugs {
  name:  {type:String,required:true},
  weight: {type:Number,required:true},
  quantity:{type:String,required:true}
}


export interface Patient {
    reg_No: {type:String,required:true,unique: true},
    faculty:{type:String,required:true},
    date:{type:Date,required:true},
    name: {type:String,required:true},
    raddress:{type:String,required:true},
    address:{type:String,required:true},
    dob:{type:Date,required:true},
    sex:{type:String,required:true},
    marital_status:{type:String,required:true},
    last_school_attend:{type:String,required:true},
    parent: {
        parentName: {type:String,required:true},
        pmobile_No:{type:String,required:true},
        paddress:{type:String,required:true},
    },
    diseases:[String],
    operation:{type:String},
    mentioned_problem:{type:String},
}