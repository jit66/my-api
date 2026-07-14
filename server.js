const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello! this is my api')
})

server.listen(3000);
console.log("server is running")
