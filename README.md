# debugf  [![Build Status](https://travis-ci.org/jfseb/debugf.svg?branch=master)](https://travis-ci.org/jfseb/abot_parser)[![Coverage Status](https://coveralls.io/repos/github/jfseb/debugf/badge.svg)](https://coveralls.io/github/jfseb/abot_parser)
# debugf

A tiny wrapper to extend [npm debug module](https://github.com/visionmedia/debug)


## Installation

```bash
$ npm install debugf
```

## Usage

`debugf`, just like [debug](https://github.com/visionmedia/debug/)  exposes a function; simply pass this function the name of your module, and it will return a decorated version of `console.error` for you to pass debug statements to. This will allow you to toggle the debug output for different parts of your module as well as the module as a whole.

**THe difference to debug is that if a funciton is passed as argument, this is *evaluated* and the result output if debugging is enabled
for this module
the plain debug module outputs [Function]
**

Thus this is a slightly incompatible drop-in replacement for debug

```js
var debug = require('debugf')('http')
  , process = require('process'),
  , name = 'MyApp';

//

debug('booting %s', name);

// dump environment
debug( () =>  Object.properties(process.env).map( p =>  ).join("\n") );


// dump environment
debug( function() {
    // do something really heavy but only when debugging is on
    return collectAllTheWorld()
});


// fake worker of some kind
```

