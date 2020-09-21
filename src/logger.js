const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    log(message) {
        this.on("new_message", message)
    }
}

exports.Logger = Logger