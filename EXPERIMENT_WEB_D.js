////////////////////////////////[EXPERIMENT 1]//////////////////////////////////////////

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit("greet", "TASIK");

// myEmitter.on("exit", () => {
//   console.log("Exiting the application...");
// });

// myEmitter.emit("greet", "2nd year");
// myEmitter.emit("exit");





// const { EventEmitter } = require("events");
// class Button extends EventEmitter {}
// const button = new Button();

// button.on("click", () => {
//   console.log("Button clicked!");
// });

// button.on('mouseover', () => {
//   console.log("Mouse over the button!");
// });

// button.emit("click");
// button.emit("mouseover");




// EXPERINENT 1 

// CODE : COPY PASTE 

// --------


// OUTPUT : PASTE HERE PHOTO