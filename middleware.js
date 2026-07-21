const express = require('express');
const app = express();

function logger(req,res,next){
    console.log(`${req.method} ${req.url}`)
    next();
}

app.use(logger);

app.get('/account',(req,res)=>{
    res.json({msg : "acc created!"})
})
app.post('/transfer',(req,res)=>{
    res.json({msg : "money tramsfered!"})
})
app.get('/transactions',(req,res)=>{
    res.json({msg : "transaction created"})
})

app.listen(3000,()=>{
    console.log("server running")
})