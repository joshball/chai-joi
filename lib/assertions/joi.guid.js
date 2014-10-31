'use strict';
var chaiJoi = function(chai, utils) {

    var Assertion = chai.Assertion;
    var flag = utils.flag;
    var assert = chai.assert;

    var Joi = require('joi');

    //-------------------------------------------------------------------------------------------------------------
//    path()
//
//    Assert the path exists.
//
//        Uses fs.existsSync().
//
//        expect(path).to.be.a.path(?msg);
//    expect(path).to.not.be.a.path(?msg);
//
//    path.should.be.a.path(?msg);
//    path.should.not.be.a.path(?msg);
//
//    assert.pathExists(path, ?msg);
//    assert.notPathExists(path, ?msg);
//    Use of Chai's exist-chain would've been nice but has issues with negations and the message parameter. So don't do that.
    Assertion.addMethod('guid', function(msg) {
        var preMsg = '';
        if (msg) {
            flag(this, 'message', msg);
            preMsg = msg + ': ';
        }

        var obj = this._obj;

        new chai.Assertion(obj, preMsg + 'value').is.a('string');
        var validation = Joi.validate(obj, Joi.string().guid());
        this.assert(
            !validation.error, "expected #{this} to be a guid", "expected #{this} not to be a guid"
        );
    });
    assert.guid = function(val, msg) {
        new chai.Assertion(val).to.be.a.guid(msg);
    };
    assert.notGuid = function(val, msg) {
        new chai.Assertion(val).to.not.be.a.guid(msg);
    };

};

module.exports = chaiJoi;