// TASK 2 — Hoisting. Predict output, then explain WHY each one
// behaves the way it does in a comment

foo()
// function can be accesed before declaration because of hoisting. The function declaration is hoisted to the top of the scope, so it can be called before it is defined.
bar()
// variale cannot be accessed before declaration because of hoisting. The variable declaration is hoisted to the top of the scope, but the assignment is not. Therefore, bar is undefined at the time it is called, resulting in a TypeError when trying to call it as a function.
function foo() {
  console.log("foo called")
}

var bar = function() {
  console.log("bar called")
}

// Bonus: what's the difference in how JS treats foo vs bar?c