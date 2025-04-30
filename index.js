const express = require('express');
const app = express();
const path = require('path');
// dirname mein poora path stire ho jata hai project tak ka 
// then path.join karrke aap aage ka path de sakte ho
console.log(__dirname);

// middleware for form parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// now we will set up public static files using express using a middleware
app.use(express.static(path.join(__dirname, 'public')));

// ejs install karne ke baad view engine setup karna hai, phir "views" naam ka folder banana to keep ejs files
app.set('view engine', 'ejs');

// ab ek route  create
app.get('/', (req,res)=>{
    // res.send('Hello Dua! You are doing great.');

    // ab route kp res.send na karke res.render karenge ejs ka page
    res.render('index');
})

app.get('/profile/:username', (req,res)=>{
    res.send(`Hello dear, ${req.params.username}`);
})

app.get('/profile/:username/:age', (req,res)=>{
    res.send(`Hello dear, ${req.params.username} of age ${req.params.age}`);
})
// ab server ko port par listen
app.listen(3000, ()=>{ 
    console.log("chal gaya server");
})