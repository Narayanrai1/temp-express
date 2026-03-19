const http = require('http');
const server = http.createServer((req,res)=>
{
    console.log("user hit the server .. ")
    // console.log(req.method);
    // console.log(req.url)
    const url = req.url;
    if(url === '/')
    {
    res.writeHead(200, {'content-type' : 'text/html'})
    // res.writeHead(200, {'content-type' : 'text/plain'})
    res.write(`<h1>Hello everyone</h1>`)
    res.end();
    }
    else if(url === '/about')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>About page</h1>')
        res.end();
    }
    else
    {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page not found</h1>')
        res.end();
    }
    res.end()
});
server.listen(5000,()=>
{
    console.log("listening  . . .   ")
});
