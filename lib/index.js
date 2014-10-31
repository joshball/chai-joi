'use strict';

module.exports = function (chai, utils) {
    require('./assertions/joi.guid')(chai, utils);
    require('./assertions/joi.string.guid')(chai, utils);
};
