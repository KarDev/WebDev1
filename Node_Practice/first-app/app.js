const http = require('http')
// const fs = require('fs');
const routes = require('./routes');

// fs.writeFileSync('hello.txt', 'Hello from Node.js') 

const server = http.createServer(routes );

server.listen(3000);