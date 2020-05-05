"use strict"

function stripProperty(obj, prop) {
  // write your code here
  let myobj = { ...obj }
  delete myobj[prop]
  return myobj
}

let testobj = {
  foo: 1,
  bar: 2,
  baz: 3
}

console.log(stripProperty(testobj, "bar"))
