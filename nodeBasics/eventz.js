const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//register a listener
//emitter.addListener()
logger.on("messageLogged", (arg) => {
  //e eventArg
  console.log("listener called", arg);
});

//registera  listener for logged data
logger.on("logging", (data) => {
  console.log("Data recieved", data);
});

logger.log("message");
