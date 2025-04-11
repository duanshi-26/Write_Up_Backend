const express = require('express');
const app = express();

// middleware for form parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ab ek route  create
app.get('/', (req,res)=>{
    res.send('Hello Dua! You are doing great.');
})


// ab server ko port par listen
app.listen(3000, ()=>{
    console.log("chal gaya server");
})