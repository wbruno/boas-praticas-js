var mysql = require('../Db/mysql');

function UsersModel() {

}

UsersModel.prototype.create = function(data, callback) {

};

UsersModel.prototype.findOne = function(_id, callback) {
  mysql.query('SELECT id, name, age FROM users WHERE id = ' + _id, function(err, rows, fields) {
    callback(err, rows);
  });
};

UsersModel.prototype.findAll = function(callback) {
  mysql.query('SELECT id, name, age FROM users', function(err, rows, fields) {
    callback(err, rows);
  });
};

UsersModel.prototype.update = function(data, _id, callback) {

};

UsersModel.prototype.delete = function(_id, callback) {

};

module.exports = new UsersModel();
