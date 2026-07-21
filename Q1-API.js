// // create post API for users 


// const express = require('express');
// const app = express();

// app.use(express.json())

// let transactions = [];

// app.post("/transactions", (req,res)=>{
//     const {userId , name , type , amount , description}= req.body;

//     //validation 

//     if(!userId || !name  || !type || !amount || !description){
//         return res.status(400).json({
//             success : false ,
//             message  : "All fieds are required"
//         });
//     }

//     if(!["credit","debit"].includes(type)){
//         return res.status(400).json({
//             success : false,
//             message : "type must be credit or debit"
//         })
//     }

//     const transaction = {
//         id : transactions.length + 1,
//         userId,name,type,amount,description
//     }

//     transactions.push(transaction)

//     console.log("Sending 201");

//     res.status(201).json({
//         success : true,
//         message : "trans created succesfully",
//         data : transaction
//     });

// });

// app.listen(3000,()=>{
//     console.log("server running..... on port 3000")
// })



// VALIDATIONS 


const express = require('express');
const app = express();

app.use(express.json())

let transactions = [];

app.post("/transactions", (req,res)=>{
    const {userId , name , type , amount , description}= req.body;


    // 1. check user id 

    if(!userId){
        return res.status(404).json({
            status : false
,           message : "user not found"
        })
    }

    // 2. check type 

    if(!["credit","debit"].includes(type) ){
        return res.status(400).json({
            status : false,
            message : "invalid trans type"
        })
    }

    if(typeof amount !== "number" || amount <=0){
        return res.status(400).json({
            status : false,
            message : "amount should be positive"
        })
    }

    if(!description || description.trim().length <=3){
        return res.status(400).json({
            status : false,
            message : "descp should be more than 3 char"
        })
    }

      const transaction = {
    id: transactions.length + 1,
    userId,
    name,
    type,
    amount,
    description,
  };

  transactions.push(transaction);

  return res.status(201).json({
    status: true,
    message: "Transaction created successfully",
    data: transaction,
  });

})

app.listen(3000, () => {
  console.log("Server runningnn on port 3000");
});