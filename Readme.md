store
=====

A minimal local storage wrapper which stores in-memory in case localStorage is
not available.

## Example

```
var store = require('store')(); // defaults to prefix "publicclass/store/"
store.set('user', {name: 'bob', id: 1, friends: []}); // = object
store.get('user'); // = object
```

## API

### new Store([prefix])

Create a new Store instance.

### Store#get(key)

Returns the value stored at that key (if any).

### Store#set(key, value)

Store the value to the corresponding key. And returns the unmodified set value.

__note: it stores as json so it won't accept any circular references in objects__

### Store#del(key)

Removes the stored key and returns `true` or `false` depending if it existed.

### Store#length

The current number of keys stored in the instance.
