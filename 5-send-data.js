const express = require('express');
const app = express();
const {products} = require('./data.js')
app.get('/',(req,res)=>
{
    res.send('<h1>Home page</h1> <a href= "/api/products">products</a>')
})
app.get('/api/v1/query',(req,res)=>
{
    console.log(req.query);
    const {search , limit} = req.query;
    let sortedProducts = [...products]
    if(search)
    {
        sortedProducts = sortedProducts.filter((product)=>
        {
            return product.name.startsWith(search);
        })
    }
    if(limit)
    {
        sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1)
    {
        return res.status(200).json({sucess:true , data:[]})
    }
    res.send(sortedProducts);
    
})
app.get('/api/products/:productID',(req,res)=>
{
    // console.log(req)
    console.log(req.params);
    const {productID} = req.params;
    const single = products.find((product)=>
    {
        return product.id===Number(productID);
    })
    if(!single) 
    {
        res.status(404).send(`<h1>Product does not exists</h1>`);
    }
    else
    res.json(single);



    // const newProduct = products.find((product)=>
    // {
    //         return product.id===1;
    // })
    // res.json(newProduct)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>
{
    res.send("hello world");
})

app.listen(5000,()=>
{
    console.log("Server is listening . . .")
})
// const express = require('express')
// const app = express();
// const {products} = require('./data.js');
// app.get('/',(req,res)=>
// {
//     res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
// })
// app.get('/api/products',(req,res)=>
// {
//     const newProduct = products.map((product)=>
//     {
//         const {id,name,image} = product;
//         return {id,name,image}
//     })
//     res.json(newProduct);
// })
// app.listen(5000,()=>
// {
//     console.log("hello listenting . . ");
// })