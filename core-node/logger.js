const EventEmitter = require('events');
class Logger extends EventEmitter{
     log = (...message) => {
        // emitter.on(`logger`,message=>console.log(`Logger event :`,message))
        this.emit(`messageLogged`,` ${message}`)
        this.emit(`messageLogged`,{str1:'sangamesh', str2:'bagalkot'})
    }

}




module.exports=Logger;
