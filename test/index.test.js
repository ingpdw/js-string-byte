var jsStringByte = require( '..' ),
    assert = require( 'assert' );

console.log( jsStringByte );

describe('jsStringByte()', function() {
  it('should be 1 byte.', function() {
    assert.equal( jsStringByte( 'a' ), 1 );
  });

  it('should be 2 byte.', function() {
    assert.equal( jsStringByte( '한', 2 ), 2 );
  });

  it('should be 5 byte.', function() {
    assert.equal( jsStringByte( 'a 123' ), 5 );
  });

  it('should be 5 byte.', function() {
    assert.equal( jsStringByte( '^^ gg' ), 5 );
  });

  it('should be 3 byte.', function() {
    assert.equal( jsStringByte( '한' ), 3 );
  });

  it('should be 2 byte.', function() {
    assert.equal( jsStringByte( '한', 2 ), 2 );
  });

  it('should be 2 byte.', function() {
    assert.equal( jsStringByte( '~~' ), 2 );
  });
});
