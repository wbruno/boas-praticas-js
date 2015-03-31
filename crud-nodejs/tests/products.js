var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app'),
    db      = require('../Db/mongo'),
    _id;


describe('Product Endpoints', function(){
  beforeEach(function(done) {
    db.collection('products').remove({}, done);
  });

  it.only('GET /products', function(done){
    db.collection('products').insert({ 'name': 'Walter White' }, function(){
      db.collection('products').insert({ 'name': 'Goku' }, function(){

        request(app)
          .get('/products')
          .expect(200)
          .end(function(err, res){
            var data = res.body;

            assert.equal(data[0].name, 'Walter White');
            assert.equal(data[1].name, 'Goku');
            assert.equal(data.length, 2);
            done();
          });
      });
    });
  });

  it('GET /products/:id', function(done){
    request(app)
      .get('/products/' + _id)
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('POST /products', function(done){
    request(app)
      .post('/products')
      .send({ 'name': 'Other name', 'price': 19.90 })
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('PUT /products/:id', function(done){
    request(app)
      .put('/products/' + _id)
      .send({ 'name': 'Other name' })
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('DELETE /products/:id', function(done){
    request(app)
      .delete('/products/' + _id)
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });
});

