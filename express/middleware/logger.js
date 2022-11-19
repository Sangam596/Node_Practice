const debuggerLog = require('debug')('Debugger:LOG');

const logger = async (req,res,next)=>{
	console.log(`Method:${req.method} route:${req.originalUrl} body:`,req.body && req.body);
	next();
}

module.exports = logger;