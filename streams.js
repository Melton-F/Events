const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.on('request', (req, res)=>{
    // Solution using read method
    // fs.readFile('test-file.txt', (err, data)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.end(data)
    //     }
    // })

    // Solution using stream method
    const reading = fs.createReadStream('test-file.txt')
    reading.on('data', pieces=>{
        res.write(pieces)
    })
    reading.on('end', ()=>{
        console.log("successfully written");
        res.end()
    })
    reading.on('error', err =>{
        console.log(err);
    })
    // reading.pipe(res)
})

server.listen(8080, ()=>{
    console.log("its listening");
})