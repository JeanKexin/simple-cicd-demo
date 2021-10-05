// index.test.js
const assert = require('assert');
var expect = require("chai").expect;
var app = require("../index.js");


describe('compounding frequency', function() {
    it('should return 365 when daily is selected', function() {
        expect(app._test.compoundingFrequency("1")).to.equal(365);
    });
})