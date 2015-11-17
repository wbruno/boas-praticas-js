'use strict';

let Promise = require('bluebird'),
    db = require('mongojs')('be-mean');

let Pokemon = Promise.promisifyAll(require('./Pokemon'));
let dbAsync = Promise.promisifyAll(db.collection('pokemons'));
const QNT = 778;
const LIMIT = 10;
var OFFSET = 0;

var promises = [];
var i = 0;

while (QNT - OFFSET > 0) {
  OFFSET = i * LIMIT;

  let options = { limit: LIMIT, offset: OFFSET };
  console.log(options);

  let promise = Pokemon.getAsync(options)
    .then(function(data) {
      if (!data.length) {
        return true;
      }

      console.log(data.length);
      return dbAsync.insertAsync(data);
    });

  promises.push(promise);
  i++;
}

Promise.all(promises)
  .then(function() {
    process.exit();
  })
  .catch(function(err) {
    console.log(err, err.stack);
  });
