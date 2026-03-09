// TASK 5 — Real world scenario
// This is a bug that exists in production codebases right now.
// Find it, explain it, fix it.

function getUserRole(user) {
  if (user.role == "admin") {
    return "Full access"
  } else if (user.role == false) {
    return "Blocked"
  } else {
    return "Regular access"
  }
}

console.log(getUserRole({ role: "admin" }))
console.log(getUserRole({ role: false }))
console.log(getUserRole({ role: 0 }))       // bug lives here
console.log(getUserRole({ role: "" }))      // and here
console.log(getUserRole({ role: null }))    // and here

function getUserRole(user) {
  if (user.role === "admin") {        // strict equality
    return "Full access"
  } else if (user.role === false) {   // strict equality
    return "Blocked"
  } else {
    return "Regular access"
  }
}

console.log(getUserRole({ role: "admin" }))  // "Full access" ✅
console.log(getUserRole({ role: false }))    // "Blocked" ✅
console.log(getUserRole({ role: 0 }))        // "Regular access" ✅
console.log(getUserRole({ role: "" }))       // "Regular access" ✅
console.log(getUserRole({ role: null }))     // "Regular access" ✅

// User has 0 items in cart
const cart = { items: 0 }

if (cart.items == false) {
  console.log("Cart is empty")   // triggers ❌ — 0 is not false
}

// Bank account with 0 balance
const account = { balance: 0 }

if (account.balance == false) {
  console.log("No balance")      // triggers ❌ — wrong
}

// Form field left empty
const form = { username: "" }

if (form.username == false) {
  console.log("No username")     // triggers ✅ accidentally correct
}                                // but for wrong reasons — dangerous
