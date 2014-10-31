'use strict';
var joiString = function(chai, utils) {

    var Assertion = chai.Assertion;
    var flag = utils.flag;
    var assert = chai.assert;

    var Joi = require('joi');

    //-------------------------------------------------------------------------------------------------------------

    Assertion.addMethod('string', function(msg) {
        var preMsg = '';
        if (msg) {
            flag(this, 'message', msg);
            preMsg = msg + ': ';
        }

        var obj = this._obj;

        new chai.Assertion(obj, preMsg + 'value').is.a('string');
        var validation = Joi.validate(obj, Joi.string());
        this.assert(
            !validation.error, "expected #{this} to be a string", "expected #{this} not to be a string"
        );
    });
    assert.string = function(val, msg) {
        new chai.Assertion(val).to.be.a.string(msg);
    };
    assert.notString = function(val, msg) {
        new chai.Assertion(val).to.not.be.a.string(msg);
    };

};

module.exports = joiString;