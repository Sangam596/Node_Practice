const path = require('path');
const os = require('os');
// log(path.parse(__filename));
// log(os.cpus());
// log(os.totalmem())

const fs = require('fs');
fs.readdir(`./`, (err, data) => {
    try {
        if (err) throw err
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})

const Logger = require('./logger');
const logger = new Logger();

logger.on(`messageLogged`, arg => console.log(`Listener Called`, arg));
logger.log(`hi sangam`,'hello')

const appHttp = require('./http');

