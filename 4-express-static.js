const express = require('express');
const path = require('path');
const app = express();

const file = path.join(__dirname ,'./nav-bar/index.html')


//setup static and middleware
app.use(express.static('./nav-bar'))


// app.get('/',(req,res)=>
// {
//     res.sendFile(file);
   
// })

//without this file can also run because it is middleware app .use
//itself find the html file and other resoursed to send in the browser


app.all('*', (req,res)=>
{
    res.status(404).sendFile('NOT FOUND')
})

app.listen(5000,()=>
{
    console.log("app is listenting .. . ")
})