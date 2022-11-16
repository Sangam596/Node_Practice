// uses node core module http


const http = require('http');
const port =process.env.PORT || 3001;

const server = http.createServer((req,res)=>{
    if(req.url===`/`){
        res.write('hello world');
        res.end()
    }
    if(req.url===`/api/courses`) {
        res.write(JSON.stringify([1,2,3,4,5,5]));
        res.end()
    }
});

const appHttp=server.listen(port,()=>console.log(`Listening on port http://localhost:3001`));


module.export=appHttp;
