//'use strict';
//
//describe('guid', function () {
//
//    var chai = require('chai');
//    var expect = chai.expect;
//    var assert = chai.assert;
//
//    var styles = {
//        "expect/should": {
//            base: {
//                "basic": function (params) {
//                    expect(params.value).to.be.a.guid();
//                    params.value.should.be.a.guid();
//                },
//                "with message": {msg: true, call: function (params) {
//                    expect(params.value).to.be.a.guid(params.msg);
//                    params.value.should.be.a.guid(params.msg);
//                }}
//            },
//            negate: function (params) {
//                expect(params.value).to.not.be.a.guid();
//                params.value.should.not.be.a.guid();
//
//            }
//        },
//        assert: {
//            base: {
//                "basic": function (params) {
//                    assert.guid(params.value);
//                },
//                "with message": {msg: true, call: function (params) {
//                    assert.guid(params.value, params.msg);
//                }}
//            },
//            negate: {
//                "basic": function (params) {
//                    assert.notGuid(params.value);
//                },
//                "with message": {msg: true, call: function (params) {
//                    assert.notGuid(params.value, params.msg);
//                }}
//            }
//        }
//    };
//
//    var defaults = {
//        msg: 'My Message'
//    };
//
//    var test = chai.getStyleTest(styles, defaults);
//
//    test.valid({
//        value: '104c041f-853f-47df-853d-00d3a84bd21a',
//        report: "expected '<%= value %>' not to be a guid"
//    });
//    test.valid({
//        value: '{104c041f-853f-47df-853d-00d3a84bd21a}',
//        report: "expected '<%= value %>' not to be a guid"
//    });
//    test.invalid({
//        value: '104c041f-853-47df-853d-00d3a84bd21a',
//        report: "expected '<%= value %>' to be a guid"
//    });
//    test.error({
//        label: 'bad value type',
//        value: 123,
//        report: "value: expected <%= value %> to be a string"
//    });
//    test.error({
//        label: 'bad value type',
//        value: {'foo':'bar'},
//        report: "value: expected { foo: 'bar' } to be a string"
//    });
//});
