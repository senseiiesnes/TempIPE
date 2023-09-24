const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Listener 1
const listener1 = () => {
  console.log("Listener 1 called");
};

// Listener 2
const listener2 = () => {
  console.log("Listener 2 called");
};

// Add both listeners to the "commonEvent"
emitter.on("commonEvent", listener1);
emitter.on("commonEvent", listener2);

// Print the number of listeners associated with "commonEvent"
const listenerCount = emitter.listenerCount("commonEvent");
console.log(`Number of listeners for commonEvent: ${listenerCount}`);

// Emit the event to trigger the listeners
emitter.emit("commonEvent");

// Remove one of the listeners (listener1)
emitter.removeListener("commonEvent", listener1);

// Print the number of remaining listeners
const remainingListenerCount = emitter.listenerCount("commonEvent");
console.log(
  `Number of remaining listeners for commonEvent: ${remainingListenerCount}`
);

// Emit the event again to trigger the remaining listener (listener2)
emitter.emit("commonEvent");
