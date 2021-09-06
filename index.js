const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("landing")
})

app.listen(process.env.port||3000,()=>{
    console.log("ScriptInk Podcast live on Port 3000")
})
