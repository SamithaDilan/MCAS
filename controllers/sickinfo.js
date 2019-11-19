// const UserData = require('../models/index.js');
// let UserData = require('../models/index.UserData');
// let tempUser = require('../models/index.tempUser');
var { UserData } = require("../models/index");
var { tempUser } = require("../models/index");


exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
}


exports.add = (req, res) => {
      // Validate request
      // if(!req.body.content) {
      //     return res.status(400).send({
      //         message: Patient content can not be empty"
      //     });
      // }
  
      // Create a Patient
      const temp = new tempUser({
        reg_no:req.body.reg_no,
        info:req.body.info
        })
        
      temp.save()
      

      .then(create => {
          res.send(create);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while creating the patient."
          });
      });


    //   UserData.findOne({ reg_no:req.body.reg_no }) 
    //         .then((doc) => {
    //         if (doc) {
    //             console.log(doc);
    //         } else {
    //             const user = new UserData({
    //                 reg_no:req.body.reg_no,
    //                 info:req.body.info
    //                 })
                    
    //                 user.save()
    //         }
    //         })
    //     .catch((err) => {
    //         console.log(err);
    //     });



    //   UserData.findById(reg_no:req.params.patientId)
    //     .then(findOne => {
    //         if(!findOne) {
    //             return res.status(404).send({
    //                 message: "Patient not found with id " + req.params.patientId
    //             });            
    //         }
    //         res.send(findOne);
    //     }).catch(err => {
    //         if(err.kind === 'ObjectId') {
    //             return res.status(404).send({
    //                 message: "Patient not found with id " + req.params.patientId
    //             });                
    //         }
    //         return res.status(500).send({
    //             message: "Error retrieving patient with id " + req.params.patientId
    //         });
    //     });
  };

exports.update = (req, res) => {
      
        UserData.findOne({ reg_no:req.body.reg_no }) 
            .then((doc) => {
            if (doc) {
                UserData.update({ reg_no:req.body.reg_no }, {
                    $push : {info:req.body.info}
                  }, {new: true})
                  .then(update => {
                      if(!update) {
                          return res.status(404).send({
                              message: "Patient not found with id " + req.params.patientId
                          });
                      }
                      res.send(update);
                  }).catch(err => {
                      if(err.kind === 'ObjectId') {
                          return res.status(404).send({
                              message: "Patient not found with id " + req.params.patientId
                          });                
                      }
                      return res.status(500).send({
                          message: "Error updating patient with id " + req.params.patientId
                      });
                  });
            } else {
                const user = new UserData({
                    reg_no:req.body.reg_no,
                    info:req.body.info
                    })
                    
                    user.save()
            }
            })
        .catch((err) => {
            console.log(err);
        });

      
        tempUser.remove({reg_no:req.params.patientId})
            .then(remove => {
                if(!remove) {
                    return res.status(404).send({
                        message: "Patient not found with id " + req.params.patientId
                    });
                }
                res.send({message: "Patient deleted successfully!"});
                }).catch(err => {
                    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                        return res.status(404).send({
                            message: "Patient not found with id " + req.params.patientId
                        });                
                    }
                    return res.status(500).send({
                        message: "Could not delete patient with id " + req.params.patientId
                    });
                });
            
  };

exports.remove = (req, res) => {
  UserData.findByIdAndRemove(req.params.patientId)
    .then(remove => {
        if(!remove) {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });
        }
        res.send({message: "Patient deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete patient with id " + req.params.patientId
        });
    });
};

exports.findAll = function(req, res, next) {
  UserData.find()
    .then(findAll => {
        res.send(findAll);
        //console.log(findAll)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving patient."
        });
    });
};

exports.findOne = (req, res) => {
  UserData.findOne({ reg_no:req.params.patientId }) 
  .then(findOne => {
      if(!findOne) {
          return res.status(404).send({
              message: "Patient not found with id " + req.params.patientId
          });            
      }
      res.send(findOne);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Patient not found with id " + req.params.patientId
          });                
      }
      return res.status(500).send({
          message: "Error retrieving patient with id " + req.params.patientId
      });
  });
};

exports.findTemp = function(req, res, next) {
    tempUser.find()
      .then(findTemp => {
          res.send(findTemp);
          //console.log(findAll)
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving patient."
          });
      });
  };
 