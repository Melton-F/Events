const EventEmitter = require('events');
const http = require('http')

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales

// myEmitter.on("New Sale", ()=>{
//     console.log("There was a new sale");
// })

// myEmitter.on("New Sale", ()=>{
//     console.log('sales starts soon ');
// })

// myEmitter.on("New Sale", Stock=>{
//     console.log(`We have a stock of ${Stock}`);
// })
// myEmitter.emit("New Sale", 11)

/////////////////////////////////////

const server = http.createServer()

server.on("request", (req, res)=>{
    console.log('Request received in log');
    res.end('Request received to client')
})


server.on("request", (req, res)=>{
    console.log('Another request')
})

server.on("request",()=>{
    console.log("Server closed");
})

server.listen(8080, ()=>{
    console.log("Waiting for the request...");
})