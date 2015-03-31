var UsersModel = require('../model/UsersModel');
var Promise = require('bluebird');


function UsersController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

UsersController.prototype.create = function(req, res) {

};

UsersController.prototype.findOne = function(req, res) {
  var _id = req.params._id;

  this.Model.findOneAsync(_id)
    .then(function(result) {
      res.json(result[0] || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

UsersController.prototype.findAll = function(req, res) {
  this.Model.findAllAsync()
    .then(function(result) {
      res.json(result || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

UsersController.prototype.update = function(req, res) {

};


UsersController.prototype.delete = function(req, res) {

};

module.exports = new UsersController(UsersModel);
