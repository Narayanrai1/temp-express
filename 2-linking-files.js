const http = require('http');
const server = http.createServer();
const fs = require('fs');
const file = fs.readFileSync('./index.html','utf8');
const script = fs.readFileSync('./todo.js','utf8');
server.on('request',(req,res)=>
{
    
    const url = req.url;
    console.log(url);
    if(url==='/')
    {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(file);
        res.end()
    }
    else if(url==='/todoscript.js')
    {
        res.writeHead(200,{'content-type':'text/script'})
        res.write(script);
        res.end();
    }
    else
    {
        res.writeHead(404, {'content-type':'text/html'});
        res.write('Go back motherfucker');
        res.end()
    }
})
server.listen(5000,()=>
{
    console.log("server is listenting . . ")
})