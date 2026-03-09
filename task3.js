// TASK 3 — Scope with let/const (how you'll actually write code)

const x = 1

function outer() {
  const x = 2
  
  function inner() {
    const x = 3
    console.log(x)
  }
  
  inner()
  console.log(x)
}

outer()
console.log(x)

// Q1: What does each console.log print? Why?

// Q2: What happens if you remove const x = 2 from outer()?
//     What will outer's console.log print now?

// Q3: What happens if you remove const x = 3 from inner()?
//     What will inner's console.log print now?

// This is called the scope chain. Understand this and 
// you'll never be confused about variable scope again.