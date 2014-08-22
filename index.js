
// default to an in-memory cache
var cache = {};

// check for local storage support
if ('localStorage' in this) {
  try {
    var now = new Date().toString();
    this.localStorage[now] = now;
    if (this.localStorage[now] == now) {
      delete this.localStorage[now];
      cache = this.localStorage;
    }
  } catch (e) {}
}

module.exports = Store;

function Store(prefix) {
  if (!(this instanceof Store)) {
    return new Store(prefix);
  }
  this.prefix = prefix || 'publicclass/store/';
  this.length = cache.length || Object.keys(cache).length || 0;
}
Store.prototype.set = function(key, data) {
  var existed = (this.prefix + key) in cache;
  var json = JSON.stringify(data);
  cache[this.prefix + key] = json;
  if (!existed) {
    this.length += 1;
  }
  return data;
};
Store.prototype.get = function(key) {
  var existed = (this.prefix + key) in cache;
  if (existed) {
    var json = cache[this.prefix + key];
    return JSON.parse(json);
  }
  return undefined;
};
Store.prototype.del = function(key) {
  var existed = (this.prefix + key) in cache;
  if (existed) {
    this.length -= 1;
  }
  delete cache[this.prefix + key];
  return existed;
};
