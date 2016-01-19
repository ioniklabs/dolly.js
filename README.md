# dolly.js

dolly.js is a super simple JavaScript plugin for cloning JavaScript variables. Support is omitted for several object types that were not required in the application but support may be added in the future.

## example
```
var obj = {
  num: 1,
  str: 'it\'s pande*clone*ium',
  boolean: false,
  obj: {
    str: 'foobar'
  },
  array: [1,2,3,4,5],
  obj_array: [{
    id: 1,
    title: 'foobar',
    nested_array: [1,2,3,4,5]
  }],
  is_clone: false
};
var clone = dolly(obj);
clone.is_clone = true;
console.log( obj.is_clone ); // false
```
