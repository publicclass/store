var assert = require('better-assert');
var store = require('./')();

var num = store.set('num', 123);
assert(num === 123);
assert(num !== '123');
assert(num == '123');
assert(num === store.get('num'));

var str = store.set('num', '123');
assert(str == 123);
assert(str !== 123);
assert(str === '123');
assert(str === store.get('num'));

var obj = store.set('obj', {
  num: 123
});
assert(typeof obj == 'object');
assert('num' in obj);
assert(obj.num === 123);
assert(obj.num !== '123');
assert(obj !== store.get('obj'));

assert(true === store.del('num'));
assert(undefined === store.get('num'));
assert(false === store.del('num'));
