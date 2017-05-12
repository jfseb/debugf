
var process = require('process');
process.env['DEBUG'] = 'test1';
var root = (process.env.FSD_COVERAGE) ? '../js_cov' : '../js';
var debugf = require(root + '/index.js');

var debugorig = require('debug');

exports.testParser  = function (test) {
  var s1 = debugf('test1');
  var logged = [];
  s1.log = function(a) { logged.push(a);};
  s1('here we go');
  s1(function() { return 'here we come from a function'; });
  s1('ab %O ', { a : 1});
  debugorig('abc');
  test.deepEqual(logged,
    [ '  \u001b[31;1mtest1 \u001b[0mhere we go',
      '  \u001b[31;1mtest1 \u001b[0mhere we come from a function',
      '  \u001b[31;1mtest1 \u001b[0mab { a: \u001b[33m1\u001b[39m } '
    ]);
  test.done();
};

