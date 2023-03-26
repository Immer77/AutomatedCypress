const {expect} = require('chai');
const fs = require('fs');
const {logToFile} = require('../model/keylog.js');


describe("Testing if it's possible to write to a file", function(){

    it("Should get from a file", function(done){
        // Arrange
        let data = "Hello World";
        let filename = "unittest";
        let filepath = `${filename}.log`

        logToFile(data,filename, function(err){
            if(err) throw err;
        });

        fs.readFile(filepath, function(err, content) {
            if(err){
                throw err;
            }
            expect(content.toString().trim()).to.equal(data);

        });
        done();
    })
})