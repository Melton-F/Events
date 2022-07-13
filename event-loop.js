fs = require('fs')
crypto = require('crypto')
const start = Date.now();


setTimeout(()=> console.log("timer 1"), 0)

setImmediate(()=> console.log("immediate timer 1"))

fs.readFile('./test-file.txt', ()=>{
    console.log('I/O readed');
    setTimeout(() => {
        console.log("Timeout inside the function"), 0
    });
    setTimeout(()=> console.log('Timeout inside the function 2'),100)

    setImmediate(()=> console.log("Set Immediate inside function"))

    process.nextTick(()=>{
        console.log("its nexttick");
    })

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, "password encypted 1");

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password encypted 2");
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password encypted 3");
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,"password encypted 4");
    })
})

console.log("Outside the callback");