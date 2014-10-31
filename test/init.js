'use strict';

var _ = require('lodash');

var chai_joi = require('../lib');

var chai = require('chai');
chai.config.includeStack = true;
chai.should();
chai.use(chai_joi);
chai.use(require('chai-json-schema'));

//var expect = chai.expect;
var assert = chai.assert;

// import assertion multi tester
require('./tester')(chai, _);

//before(function () {
//    // create some empty dirs (cannot check-in empty dirs to git)
//    mkdirp.sync('./test/fixtures/empty');
//    mkdirp.sync('./test/tmp');
//
//    assert.isDirectory('./test/fixtures');
//    assert.isDirectory('./test/fixtures/empty');
//    assert.isDirectory('./test/tmp');
//});

describe('chai-joi', function () {
    it('exports module', function () {
        assert.isFunction(chai_joi, 'chai_joi export');
    });
});
