Inheritance abstraction through a function taking an object and object literal
This is based on 

```javascript
var instance = new function Class() {};
//     ↑                              .prototype
//     └──────────────────────────────┘
//     "invisibly" linked to the Class.prototype
instance.constructor; // will be the function Class
// proof that Class.prototype and the instance are related
instance.constructor.prototype.isPrototypeOf(instance);
// true
```

An bridge created to form the link between parent and child class
