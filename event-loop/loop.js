const eventLoop = {
    queue: [],
    loop() {
        while(this.queue.length) {
            var callback = this.queue.shift();
            callback();
        }
        setTimeout(this.loop.bind(this), 50);
    },
    add(cb) {
        this.queue.push(cb);
    }
};

eventLoop.loop();
setTimeout(() => {
    eventLoop.add(() => {
        console.log("callback 1")
    });
}, 500);

setTimeout(() => {
    eventLoop.add(() => {
        console.log("callback 2")
    });
}, 800);