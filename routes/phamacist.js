var express = require('express');
var router = express.Router();

const Phamacist = require('../models/phamacist');

const doc = require('../models/docterm');
//const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
//const config = require('../config/database');
//const passport = require('passport');




//show all patient in database
router.get('/',function(req,res){
  Phamacist.find((err,phamacist)=>{
        
    if(err){
      console.log(err);
  }  
  else{
      res.json(phamacist);
  }
       

    });
});

router.get('/name',function(req,res){
  Phamacist.find({},{name : 1, _id : 1})
    .then(findAll => {
        res.send(findAll);
        //console.log(findAll)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving patient."
        });
    });
});

router.post('/add', function(req, res) {

const Phamacist = require('../models/phamacist');
const newMedi = new Phamacist({
      name:req.body.name,
      weight:req.body.weight,
      quantity:req.body.quantity

     
      
  });
  newMedi.save()
      .then(newMedi=>{
          res.status(200).json({'new drug':'Added successfully'})
          console.log("new medic added")
      })
      .catch(err => {
          res.status(400).send('Failed to create new Record');
      });

});

// patient who has get
router.get('/medirecipt',function(req,res){
  doc.find((err,doc)=>{
        
    if(err){
      console.log(err);
  }  
  else{
      res.json(doc);
  }
       

    });
});


module.exports = router;

