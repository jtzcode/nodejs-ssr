const clock = require('./clock');
clock.addListener('newEvent', (val) => {
    console.log('Event fired: ', val);
});