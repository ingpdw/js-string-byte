/*
 * shuffle - lib/js-string-byte.js
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

'use strict';

exports = module.exports = function (str) {
    var byte2048 = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
    var byte128 = arguments.length <= 2 || arguments[2] === undefined ? 2 : arguments[2];

    var _chr = '',
        _byte = 0,
        _idx = 0;
    for (; _chr = str.charCodeAt(_idx++);
    //2048(2^11), 128(2^7) == byte
    _byte += _chr >> 11 ? byte2048 : _chr >> 7 ? byte128 : 1);

    return _byte;
};