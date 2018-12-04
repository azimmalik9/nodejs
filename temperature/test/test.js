let convert = require('../app.js')
let assert = require('assert');

describe('Temperature Conversion', function() {
    describe('cToF', function(){
       it('should convert -40 celcius to -40 farenheit', function(){
          assert.equal(-40, convert.cToF(-40)); 
       });
        it('should convert 0 celsius to 32 farenheit', function(){
            assert.equal(32, convert.cToF(0));        
        });
       
        it('should return undefined if no temperature is input', function() {
            assert.equal(undefined, convert.cToF(''));
    });
    });
    describe('fToC', function(){
       it('should convert -40 farenheit to -40 celsius', function(){
          assert.equal(-40, convert.fToC(-40)); 
       });
        it('should convert 32 farenheit to 0 celsius', function(){
            assert.equal(0, convert.fToC(32));        
        });
    it('should return undefined if no temperature is input', function() {
            assert.equal(undefined,convert.fToC(''));
        });
    });
});