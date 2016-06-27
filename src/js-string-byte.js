/*
 * js-string-byte - lib/js-string-byte.js
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = function( str, byte2048 = 3, byte128 = 2 ) {
    let _chr = '', _byte = 0, _idx = 0;
    for( ; _chr = str.charCodeAt( _idx++ );
      //2048(2^11), 128(2^7) == byte
      _byte += ( _chr >> 11 )? byte2048:
        ( _chr >> 7 )? byte128: 1 );

    return _byte;
}
