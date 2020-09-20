const { Logger } = require('./logger');
const myLogger = new Logger

myLogger.on("new_message", (args) => {
    console.log("On: " + args);
})

myLogger.log("darova listener")

