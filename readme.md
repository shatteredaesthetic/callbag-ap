# callbag-ap

Callbag operator that applies data to a transformation passing through it. Works on either pullable or listenable sources.

`npm install callbag-ap`

## example

```js
const fromIter = require('callbag-from-iter');
const forEach = require('callbag-for-each');
const ap = require('callbag-ap');

const iter = fromIter([
  x => x + 1,
  x => x * 2,
  x => `${x} bits`
  x => x === 2
]);

const source = ap(2)(iter);

forEach(x => console.log(x))(source); // 3
                                      // 4
                                      // 2 bits
                                      // true
```
