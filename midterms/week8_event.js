var events = require('events');
var eventEmmiter = new events.EventEmitter();
var connectHandler = function connected(){
    console.log("connected");
    eventEmmiter.emit('data_received');
}

eventEmmiter.on('connection', connectHandler);
eventEmmiter.on('data_received', function(){
    console.log('data received');
});

eventEmmiter.emit('connection');
console.log('program ended!');