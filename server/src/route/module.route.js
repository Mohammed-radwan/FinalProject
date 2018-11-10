const modules = require('../controller/module.controller.js');

module.exports = (app) => {
  app.get('/module', modules.findAll);
  app.post('/module', modules.create);
  app.delete('/module/:moduleId', modules.delete);
  app.put('/module/:moduleId', modules.update);


  // // Retrieve a single module by Id
  // app.get('/module/:module_Id', modules.findOne);
 
  // // Update a module with Id
  // app.put('/module', function(req, res, next){
  //   moduleService.update(req, res);
  // });

  // // // Delete a module with Id
  // app.delete('/module/:_Id', function(req, res, next){
  //   moduleService.destroy(req, res);
  // });
 
};
