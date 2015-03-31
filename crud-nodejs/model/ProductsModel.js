var mongo = require('../Db/mongo');

function ProductsModel() {

}

ProductsModel.prototype.create = function(data, callback) {
  mongo.collection('products').save(data, callback);
};

ProductsModel.prototype.findOne = function(_id, callback) {
  mongo.collection('products').findOne({ "_id": mongo.ObjectId(_id) }, callback);
};

ProductsModel.prototype.findAll = function(callback) {
  mongo.collection('products').find({}, callback);
};

ProductsModel.prototype.update = function(data, _id, callback) {
  mongo.collection('products').update(data, callback);
};

ProductsModel.prototype.delete = function(_id, callback) {
  mongo.collection('products').remove({ _id: _id }, callback);
};

module.exports = new ProductsModel();
