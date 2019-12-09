# minobjs
minimal object manipulation 

## Contents
For now, the current implementation supports `isEmpty` and `merge` functions over objects

```typescript
export interface IObjs {
  merge(...items: any[]): any;

  isEmpty(obj: any): boolean;
}
```

## Example

### loading the module
```javascript 
const { Objs } = require("minobjs");

// initialization
const obj = new Objs();
```

### `isEmpty`
```javascript

// previous initialization

// checks if an object is empty
console.log(obj.isEmpty({}));
// outputs: true
console.log(obj.isEmpty({ a: 1 }));
// outputs: false
```

### `merge`
```javascript

// previous initialization

const obj1 = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
    c: {
      d: 1,
      e: 2
    }
  }
};

const obj2 = {
  a: 1,
  b: 3,
  c: {
    a: 1,
    b: 2,
    c: {
      d: 1,
      e: 3
    }
  }
};

const obj3 = {
  e: 7
};

const obj4 = {
  e: 8,
  f: 1
};

const result = obj.merge(obj1, obj2, obj3, obj4);
console.log(result);
// outputs { a: 1, b: 3, c: { a: 1, b: 2, c: { d: 1, e: 3 } }, e: 8, f: 1 }
```

## Instalation
```bash
yarn add minobjs
# or
npm install minobjs
```
