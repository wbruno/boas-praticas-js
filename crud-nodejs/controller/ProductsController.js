var ProductsModel = require('../model/ProductsModel');

function ProductsController(Model) {
  this.Model = Model;
}

ProductsController.prototype.create = function(req, res) {
  var data = req.body;

  this.Model.create(data, function(err, result) {
    res.json(result);
  });
};

ProductsController.prototype.findOne = function(req, res) {
  var _id = req.params._id;

  this.Model.findOne(_id, function(err, result) {
    res.json(result);
  })

};

ProductsController.prototype.findAll = function(req, res) {
  var data = req.body;

  this.Model.findAll(function(err, result) {
    res.json(result);
  });
};

ProductsController.prototype.update = function(req, res) {
  var data = req.body,
      _id = req.params.id;

  this.Model.update(data, _id, function(err, result) {
    res.json(result);
  });
};


ProductsController.prototype.delete = function(req, res) {
  var _id = req.params.id;

  this.Model.delete(_id, function(err, result) {
    res.json(result);
  });
};

module.exports = new ProductsController(ProductsModel);
