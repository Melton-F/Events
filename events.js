const EventEmitter = require('events');


class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales

myEmitter.on("new sale", ()=>{
    console.log("There was a new sale");
})

myEmitter.on("new sale", ()=>{
    console.log('sales starts soon ');
})
myEmitter.emit("melton")