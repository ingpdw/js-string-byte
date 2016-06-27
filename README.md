# js-string-byte

Get the length of a string( bytes, UTF-8 )

## Install

```
$npm install js-string-byte
```

## Usage

```
var jsStringLength = require( 'js-string-byte' );

var len = jsStringLength( 'hello' );
//5

var len = jsStringLength( 'hello :D~' );
//9

var len = jsStringLength( '~~~' );
//3

```

## API

```
jsStringLength( str, byte2048 = 3, byte128 = 2 );

//if the charcode is over 2048... ( default = 3 )
//if the charcode is over 127... ( default = 2 )

jsStringLength( 'hello', 2, 2 );

```

## build
* npm install babel -g
* npm run compile

## Test
* npm install mocha -g
* npm test

## License
© 2016 ingpdw. MIT License
