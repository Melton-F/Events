const fs = require('fs')
const http = require('http')
const crypto = require('crypto')
const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 7;

setTimeout(()=> console.log('Timer 1 finished'), 0)
setImmediate(()=> console.log('Immediate 1 finished'))

fs.readFile('/starter/event-loop.js', ()=>{
    console.log("I/O finished");
    console.log("_______");
    setTimeout(()=> console.log('Timer 2 finished'), 0)
    setTimeout(()=> console.log('Timer 3 finished'), 1000)
    setImmediate(()=> console.log('Immediate 2 finished'))

    process.nextTick(()=> console.log('Its nextTick 1'))

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
        console.log(start, 'password encrypted 1');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
        console.log(Date.now(), 'password encrypted 2');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
        console.log(Date.now(), 'password encrypted 3');
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now(), 'password encrypted 4');
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now(), 'password encrypted 5');
    })
})

console.log("From the top-level code");