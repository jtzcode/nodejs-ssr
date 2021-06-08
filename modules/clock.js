const EventEmitter = require('events').EventEmitter;

class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newEvent', {value: Math.random() * 100});
        }, 3000);
    }
}

const clock = new Clock;
module.exports = clock;