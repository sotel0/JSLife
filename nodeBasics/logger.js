const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
    //send an HTTP request
    console.log(message);
    
    //raise an event
    this.emit('messageLogged', {id:1, url:'http://'});
    
    //Raise: logging (data:message)
    this.emit('logging', {data: 243, name: "cash cow"});
    }
}


module.exports = Logger;

