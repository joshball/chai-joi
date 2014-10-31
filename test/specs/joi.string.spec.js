'use strict';

describe('string', function () {

    var chai = require('chai');
    var expect = chai.expect;
    var assert = chai.assert;

    var styles = {
        "expect/should": {
            base: {
                "basic": function (params) {
                    expect(params.value).to.be.a.string();
                    params.value.should.be.a.string();
                },
                "with message": {msg: true, call: function (params) {
                    expect(params.value).to.be.a.string(params.msg);
                    params.value.should.be.a.string(params.msg);
                }}
            },
            negate: function (params) {
                expect(params.value).to.not.be.a.string();
                params.value.should.not.be.a.string();

            }
        },
        assert: {
            base: {
                "basic": function (params) {
                    assert.string(params.value);
                },
                "with message": {msg: true, call: function (params) {
                    assert.string(params.value, params.msg);
                }}
            },
            negate: {
                "basic": function (params) {
                    assert.notString(params.value);
                },
                "with message": {msg: true, call: function (params) {
                    assert.notString(params.value, params.msg);
                }}
            }
        }
    };

    var defaults = {
        msg: 'My Message'
    };

    var test = chai.getStyleTest(styles, defaults);

    test.valid({
        value: 'ciao chai',
        report: "expected '<%= value %>' not to be a string"
    });
//    test.valid({
//        value: '123123123',
//        report: "expected '<%= value %>' not to be a string"
//    });
//    test.invalid({
//        value: 123123123,
//        report: "expected '<%= value %>' to be a string"
//    });
//    test.error({
//        label: 'bad value type',
//        value: 123,
//        report: "expected <%= value %> to be a string"
//    });
//    test.error({
//        label: 'bad value type',
//        value: {'foo':'bar'},
//        report: "expected { foo: 'bar' } to be a string"
//    });
});
