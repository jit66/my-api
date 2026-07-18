// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('Hello! this is my api')
// })

// server.listen(3000);
// console.log("server is running")




// const http = require('http');

// const server = http.createServer((req,res)=>{
    
//     if(req.url === '/'){
//         res.end('Welcome to home page')
//     }
    
//     else if(req.url === '/hello'){
//         res.end('hello there')
//     }
    
//     else if(req.url === '/bye'){
//         res.end('Good Bye')
//     }
    
//     else{
//         res.end('page not found')
//     }
// })

// server.listen(3000);
// console.log("server is running")



// JSON 

// const http = require('http');

// const server = http.createServer((req,res)=>{

//     res.setHeader('Content-Type','application/json');
    
//     if(req.url === '/'){
//         res.end(JSON.stringify({message : 'Welcome to home page'}))
//     }
    
//     else if(req.url === '/user'){
//         res.end(JSON.stringify({name : 'jeet' , age : 27}))
//     }

//     else{
//         res.end('page not found')
//     }
// })

// server.listen(3000);
// console.log("server is running")


// const http = require('http');

// const server = http.createServer((req, res) => {
  
//   // Tell the browser: "hey, I'm sending JSON, not plain text"
//   res.setHeader('Content-Type', 'application/json');

//   if (req.url === '/') {
//     res.end(JSON.stringify({ message: 'Welcome to the homepage!' }));
//   } 
//   else if (req.url === '/user') {
//     res.end(JSON.stringify({ name: 'John', age: 25 }));
//   } 
//   else {
//     res.end(JSON.stringify({ error: 'Page not found' }));
//   }

// });

// server.listen(3000);
// console.log('Server is running...');



// API Post data 

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type','application/json')

//   if(req.url=== '/user'&& req.method === 'GET'){
//     res.end(JSON.stringify({name:'Jeet' ,age:25}))
//   }
//   else if(req.url=== '/user'&& req.method === 'POST'){
    
//     let body = ''

//     req.on('data',(chunk)=>{
//       body += chunk
//     })

//     req.on('end',()=>{
//       const newUser = JSON.parse(body);
//       console.log('Received:',newUser);
//       res.end(JSON.stringify({
//         message : "User Created!",
//         user : newUser
//       }));
//     });

//   }

//   else{
//         res.end(JSON.stringify({error:'Not Found'}))

//   }
// })

// server.listen(3000);
// console.log('Server is running...');



// Express 

// const express = require("express")
// const app = express();

// app.use(express.json());

// app.get("/user",(req,res)=>{
//   res.json({name:'John',age:27})
// })

// app.post("/user",(req,res)=>{
//   const newUser = req.body;
//   console.log('Received:',newUser)
//   res.json({message : 'user created',user:newUser})
// })

// app.listen(3000,()=>{
//   console.log("server is running")
// })


// POST PUT DELETE

const express = require('express')
const app = express();

app.use(express.json())

let users = [
  {id : 1 , name : 'John' , age : 25},
  {id : 2 , name : 'Ankita' , age : 26}
]

app.get('/users',(req,res)=>{
  const id = req.params.id;
  const user = users.find(u => u.id === id);
  res.json(user);
})

app.post('/users',(req,res)=>{
  const newUser = {
    id : users.length + 1,
    name : req.body.name,
    age : req.body.age
  }

  users.push(newUser);
  res.json({message : 'user created!' , user : newUser})
})

app.put('/users/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id)
  user.name = req.body.name;
  user.age = req.body.age

  res.json({message : 'user updated!' , user : user})
})

app.delete('/users/:id',(req,res)=>{
  const id = parseInt(req.params.id);
   users = users.filter(u=> u.id !== id)
   res.json({message:'user deleted'})
})

app.listen(3000,()=>{
  console.log("server is running")
})

