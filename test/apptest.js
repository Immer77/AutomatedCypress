const request = require('supertest'); 
const expect = require('chai').expect;
const {app} = require('../model/app.js');


// UNIT TESTS
describe('Our application', function() {
    let date;
  
    // Timeout for tests that take time
    this.timeout(5000);
  
    // Called once before any of the tests in this block begin.
    before(function(done) {
      // Any asynchronous action with a callback.
      app.listen(3000, function(err) {
        if (err) { return done(err); }
        done();
      });
    });
  
    // Called once before each of the tests in this block.
    beforeEach(function() {
      date = new Date();
    });
  
    // Called after all of the tests in this block complete.
    after(function() {
      console.log("Our applicationa tests done!");
    });
  
    // Called once after each of the tests in this block.
    afterEach(function() {
      console.log("The date for that one was", date);
    });

    it('Test connection is established', function(done){
        request(app).get('/').set('Content-Type', 'text/html; charset=UTF-8').expect(200, function(err, res) {
                if(err){
                    return done(err);
                }
                expect(res.status).to.equal(200);
                done();
            })

    })

    it('Test connection to about', function(done){
        request(app)
            .get('/about')
            .set('Content-Type', 'text/html; charset=UTF-8')
            .expect('Content-Type', /html/)
            .expect(200, function(err, res) {
                if(err){
                    return done(err);
                }
                expect(res.status).to.equal(200);
                

                done();
            })

    });

    it('Test connection to sitemap', function(done){
        request(app)
            .get('/sitemap')
            .set('Content-Type', 'text/html; charset=UTF-8')
            .expect('Content-Type', /html/).expect(200, function(err, res) {
                if(err){
                    return done(err);
                }
                expect(res.status).to.equal(200);
                done();
            })

    });
  });
