// index.test.js
const assert = require('assert');
var expect = require("chai").expect;
var app = require("../index.js");


describe('compounding frequency', function() {
    it('should return 365 when daily is selected', function() {
        // var calculatedFrequency = app.compoundingFrequency(1);
        expect(app._test.compoundingFrequency("1")).to.equal(365);
        // assert.equal(app.default.compoundingFrequency(1),365);
    });
})