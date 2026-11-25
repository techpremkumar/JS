# JavaScript Learning Repository

A hands-on collection of JavaScript lessons, browser demonstrations, and small practice projects. It starts with the language fundamentals and progresses through object-oriented JavaScript, asynchronous programming, and browser APIs.

## Learning map

| Section | Concepts |
|---|---|
| Language fundamentals | Variables, constants, primitive and reference types, type conversion |
| Operators and control flow | Arithmetic, assignment, comparison, logical and bitwise operators; conditions and loops |
| Functions and collections | Function forms, callbacks, arrays, objects, maps, sets |
| Object-oriented JavaScript | Constructors, classes, getters, setters, inheritance, method overriding |
| Core language features | JSON, date and time, recursion, error handling |
| Asynchronous JavaScript | Promises, promise chaining, timers, callbacks |
| Browser JavaScript | DOM selection and updates, mouse events, keyboard events |
| Practice project | Interactive Todo List |

## Repository structure

The examples are currently stored as individual files in the repository root. This keeps each lesson easy to open and run independently.

```text
JS/
├── index.html
├── script.js
├── variable.js
├── constants.js
├── Datatypes.js
├── dynamic type .js
├── type conversions.js
├── explicit conversion.js
├── operator.js
├── comparisonoperator.js
├── logicaloperator.js
├── conditioalStatemts.js
├── switch.js
├── loops.js
├── function.js
├── arrowfunctionand call .js
├── arrays.js
├── object.js
├── objectrefernce.js
├── map and set.js
├── constructor.js
├── class.js
├── inheritance.js
├── methodoverriding.js
├── json.js
├── dataandtime.js
├── recursion.js
├── errorhandling.js
├── promise.js
├── dom.html
├── eventlistener.html
├── keyboardeventlistner.html
├── modal.html
├── todo.html
├── .gitignore
├── CONTRIBUTING.md
└── README.md
```

> A few existing lesson filenames contain spelling inconsistencies or spaces. They are intentionally retained to avoid breaking existing links and references.

## Getting started

### Requirements

- A modern browser such as Chrome, Firefox, Edge, or Safari
- A code editor such as Visual Studio Code
- Node.js (only for running the standalone `.js` lessons outside the browser)

### Clone the repository

```bash
git clone https://github.com/techpremkumar/JS.git
cd JS
```

### Explore browser lessons

Open `index.html` in a browser, or run the repository with the Visual Studio Code **Live Server** extension. The landing page links to the available lesson files.

### Run a JavaScript lesson with Node.js

```bash
node variable.js
node function.js
node operator.js
node promise.js
```

Run one file at a time. The examples are independent exercises rather than a single Node.js application.

## Recommended learning sequence

1. Variables, constants, data types, and type conversion.
2. Operators, conditional statements, and loops.
3. Functions, arrays, objects, maps, and sets.
4. Constructors, classes, inheritance, and method overriding.
5. JSON, recursion, dates, and error handling.
6. Promises and other asynchronous JavaScript concepts.
7. DOM manipulation and browser events.
8. Build on the Todo List project.

## Code conventions

- Use `const` by default and `let` when reassignment is required.
- Prefer descriptive variable and function names.
- Use strict equality (`===`) unless loose equality is specifically being demonstrated.
- Keep each lesson focused on a small set of related concepts.
- Keep browser-only APIs such as `document` and `window` in browser examples.
- Add expected output or run instructions when they help explain an example.

## Contributing

Suggestions and improvements are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

No license file is currently included. Until a license is added, all rights remain with the repository owner; do not assume the code is available for unrestricted reuse.

---

Maintained by [techpremkumar](https://github.com/techpremkumar).
