let express=require("express")
let app=express()
let ejs=require("ejs")
let path=require("path")
let bodyParser=require("body-parser")
let cookieParser = require("cookie-parser")
let cookie=cookieParser()

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname,"view"));

app.listen(3001,()=>{
    console.log("3001 is runining ......")
})

let loggedin=false;

app.use((req,res,next)=>{
    console.log("middlewere")
    next()
})

app.get("/",(req,res)=>{
    console.log("get/")
    if(loggedin){
      res.redirect("/form")
    }else{
      res.redirect("/login")
    }
})

app.get("/login",function(req,res){
  if(loggedin){
      res.redirect("/form")
  }else{
    res.render("login")
  }
})

app.post("/login",(req,res)=>{
  if(req.body.username==="abcd"&&req.body.password==="Abcd"){
      
    res.cookie("logged",true);
    res.cookie("userinfo",req.body)
    console.log(req.cookies)
    loggedin=req.cookies['logged']
     res.redirect("/form")
  }else{
    console.log("redirecteed")
    res.redirect("/login")
  }
})

app.get("/form",(req,res)=>{
    if(loggedin){
  res.render("form")
    }else{
      res.redirect("/login")
    }

})

app.post("/page",(req,res)=>{
  console.log(req.body)
  res.cookie("resultofform",req.body)
  res.render("result",{objj:req.body})
  

})