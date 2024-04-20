How does javascript work?
- Main components
1. Callstack
2. Web APIS
3. Task Queue - any web apis callback functions
4. Micro queue - used by async/await function and promises =>>> promises have higher priority in the execution.
5. Event Loop


Arrow Functions

1. syntax

const sayHello = () => {
  console.log('hello')
}

sayHello()

2. arguments - 
-- arguments key word not available in arrow function. have to use rest operator, to deal with dynamic arguments.
const arrowFunc (...args) => {
  console.log(args)
}


3. Hoisting
-- Arrow functions are not hoisted

4. this keyword
-- this keyword refers to global score / window object.
  const obj = {

  const name : "akash"
  const printName : function () {
    console.log(this.name) /// it prints 
  }

  const printWithArrow : () => {
    console.log(this.name) // undefined
  }
}
