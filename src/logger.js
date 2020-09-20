const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    log(message) {
        this.emit("new_message", message)
    }
}

exports.Logger = Logger