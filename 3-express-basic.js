 const express = require('express');
 const app = express()
 
app.get('/', (req,res)=>
{
    console.log("User hit the button")
    res.send('Home page');
})
app.get('/about',(req,res)=>
{
    res.send(`<h1>This is about page</h1>`);
})
app.all('*',(req,res)=>
{
    res.status(404).send("This is fucking easy")
})

 app.listen(5000,()=>
{
    console.log('server is listening on port 5000')
})