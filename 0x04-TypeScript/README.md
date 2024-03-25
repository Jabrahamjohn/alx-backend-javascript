# TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types to the language, helping you catch errors early and write more efficient code.

## Installation

You can install TypeScript globally on your system by running the following command in your terminal:

```bash
npm install -g typescript
```
## example
``` example
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
console.log(greeter(user));
```
- This example defines a function greeter that takes a person parameter of type string. It then calls this function with the user variable, which is also of type string.