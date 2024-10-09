// require http module
const http = require('http');

// require fs module
const fs = require('fs');

// create Server
const myServer = http.createServer((req, res) => {
    console.log('request got.....');
    const log = `${Date.now()} : new request from ${req.url} \n `;

    // append log into log.txt file 
    fs.appendFile('log.txt', log, (err, result) => {
        res.end('data added.....')
    })

    // add each request in one log file

})


// port for server
myServer.listen(5000, () => console.log('server started...'))