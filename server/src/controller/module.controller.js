const Module = require('../model/module.model');

exports.findAll = (req, res) => {
  Module.find()
    .then((modules) => { res.send(modules); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.create = (req, res) => {
  const newModule = new Module(req.body);
  newModule
    .save()
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.delete = (req, res) => {
  const {moduleId}=req.params
  Module.remove({ _id: moduleId })
  .then((data) => { res.send(data); })
  .catch((err) => {
    res.status(500).send({
      message: err.message
    });
  });
};
//`PATCH`:  `Module.findOneAndUpdate({ _id: req.params.moduleId }, { title }, { new: true })`
exports.update = (req, res) => {
  const {moduleId}=req.params

    Module.findOneAndUpdate({ _id: moduleId }, {title}, { new: true })
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};








// // FIND a Module
//exports.findOne 
// function update (req, res) {
//     const {_id, title} = req.body;

//   Module.findOne({_Id})
//   .then(module => {
//       //if(!module) {
//       module.name = title; 
//       module.save().then(res.json(module));
//   })
//   .catch(err => {
//       res.status(500).send(err);
//   })   



// exports.destroy =
// function destroy( req,res){
//     const {_id} = req.params;
//     Module.findOneAndRemove({_id})
//      .then(module => {
//          res.json(module);
//      })  
//      .catch(err =>{
//          res.status(500).send(err);
//      })
// }
   


     
//   return res.status(404).send({
//               message: "module not found with id " + req.params.module_Id
//           });            
//       }
//       res.send(module);
//   }).catch(err => {
//       if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//               message: "module not found with id " + req.params.module_Id
//           });                
//       }
//       return res.status(500).send({
//           message: "Error retrieving module with id " + req.params.module_Id
//       });
//   });
// };


// // UPDATE a Module
// exports.update = (req, res) => {
//   // Find Module and update it
  
//   Module.findByIdAndUpdate(req.params.module_Id, {
//       firstname: req.body.firstname,
//   lastname: req.body.lastname,
//   age: req.body.age
//   }, {new: true})
//   .then(customer => {
//       if(!customer) {
//           return res.status(404).send({
//               message: "Customer not found with id " + req.params.customerId
//           });
//       }
//       res.send(customer);
//   }).catch(err => {
//       if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//               message: "Customer not found with id " + req.params.customerId
//           });                
//       }
//       return res.status(500).send({
//           message: "Error updating customer with id " + req.params.customerId
//       });
//   });
// };

// // DELETE a Module
// exports.delete = (req, res) => {
//   Module.findByIdAndRemove(req.params.module_Id)
//   .then(module => {
//       if(!module) {
//           return res.status(404).send({
//               message: "module not found with id " + req.params.module_Id
//           });
//       }
//       res.send({message: "module deleted successfully!"});
//   }).catch(err => {
//       if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//           return res.status(404).send({
//               message: "module not found with id " + req.params.module_Id
//           });                
//       }
//       return res.status(500).send({
//           message: "Could not delete module with id " + req.params.module_Id
//       });
//   });
// };