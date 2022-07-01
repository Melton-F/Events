const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res)=>{
    // Sollution 1 : but its okay for small programs not for the bigger one
    // fs.readFile('./starter/test-file.txt', (err, data)=>{
    //     if(err) console.log(err);
    //     res.end(data)
    // })

    // Solution 2: using streams, but the createReadStream is fast and the writable response is slow 
    // const readable = fs.createReadStream('./starter/test-file.txt')
    // readable.on('data', chunk =>{
    //     res.write(chunk)
    // })
    // readable.on('end', ()=>{
    //     res.end()
    // })
    // readable.on('error', err =>{
    //     console.log(err);
    //     res.statusCode = 500
    //     res.end("<H1>File not found</H1>")
    // })

    //Solution 3 : 
    const readable = fs.createReadStream('./starter/test-file.txt')
    readable.pipe(res)
})

server.listen(8080, ()=>{
    console.log("its listening");
})