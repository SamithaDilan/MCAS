var express = require('express');
var router = express.Router();
const Patient = require('../models/patient');
var bodyParser = require('body-parser');


//show all patient in database
router.get('/',function(req,res){
    Patient.find((err,patient)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(patient);
        }

    });
});

//show a patient of particular reg number
router.get('/:id',function(req,res){
    Patient.findById(req.params.id,(err,patient)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(patient);
        }

    });
});


//save new patient information
router.post('/add', function(req, res) {

    const newPatient = new Patient({
        reg_No:req.body.reg_No,
        faculty:req.body.faculty,
        date:req.body.date,
        name:req.body.name,
        raddress:req.body.raddress,
        address:req.body.address,
        dob:req.body.dob,
        sex:req.body.sex,
        marital_status:req.body.marital_status,
        last_school_attend:req.body.last_school_attend,
        parent:req.body.parent,
        diseases:req.body.diseases,
        operation:req.body.operation,
        mentioned_problem:req.body.mentioned_problem,
    });
    
    console.log(newPatient);
    newPatient.save()
        .then(newPatient=>{
            res.status(200).json({'newPatient':'Added successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to create new Record');
        });

});




//update patient information
router.post('/update/:id',function(req,res){

    Patient.findById(req.params.id,function(err,patient){
        if(!patient){
          return next(new Error('Could not load document'));
        }
        else{
            patient.reg_No=req.body.reg_No,
            patient.faculty=req.body.faculty,
            patient.date=req.body.date,
            patient.name=req.body.name,
            patient.raddress=req.body.raddress,
            patient.address=req.body.address,
            patient.dob=req.body.dob,
            patient.age=req.body.age,
            patient.sex=req.body.sex,
            patient.marital_status=req.body.marital_status,
            patient.last_school_attend=req.body.last_school_attend,
            patient.parent=req.body.parent,
            patient.diseases=req.body.diseases,
            patient.operation=req.body.operation,
            patient.mentioned_problem=req.body.mentioned_problem,

            patient.save().then(patient=>{
                res.json('Update done');
            }).catch(err=>{
                res.status(400).send('Failed to update Record');
            });
        }

    });
});

//remove patient information
router.get('/delete/:id',function(req,res){

    Patient.findByIdAndRemove({_id:req.params.id},function(err,patient){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
        
    });
});

module.exports = router;

















module.exports = router;

