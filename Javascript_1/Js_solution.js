"use strict";

function stripProperty(obj, prop) {
  // write your code here
  // let myobj = Object.create(obj, Object.defineProperties({configurable: true}))
  if (obj.prop) {
    obj.prop = undefined;
  }
  obj = JSON.parse(JSON.stringify(obj));
  //   for (let key in Object.keys(obj)) {
  //        if(key === prop) {
  //            const { prop, ...newobj } = obj;
  //            // Reflect.deleteProperty(obj, prop);
  //            // delete obj.prop
  //            // return newobj;
  //            break;
  //        }
  //   }

  return obj;
}
