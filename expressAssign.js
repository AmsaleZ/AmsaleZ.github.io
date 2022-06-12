const express = require('express');
const app = express();
app.listen(80, () => {console.log('Your Server is running on 80');})
var path=require("path");

 app.get("/add",function(req,res,next){
     res.sendFile(path.join(__dirname,"expressExecise.html"));})

app.get("/", function(req, res, next) {
    res.send("<h1>Welcome</h1>");
})
app.use('/add', (req, res, next) => {
    console.log(req.body); 
res.redirect('/view');
    });
    app.get("/view",function(req,res,next){
        let html="";
        html+=createSpan("Name",data["name"])
        html+=createSpan("Gender",data["gender"])
        html+=createSpan("Department",data["department"])
        html+=createSpan("Course",data["course"])
        res.send(html);
    })
    function createSpan(label,data){
        return"<span>"+label+" "+data+"</span></br>"
    }
    

let viewCount = 0;
app.get("/edit", function(req, res, next) {
    viewCount++;
    res.send("<h1>Edit Page</h1>" +"<h3>Viewer</h3>"+"<input type='checkbox' /> Check<br><br>"+"viewCount : " + viewCount);
})

app.use(function(req, res, next){
    res.send("404 page");
});


//1. Get request -> give the html
//2. post request -> stores all in this file where you started the server
//3. From Post redirect -> view Page -> whatever user has entered
//4. Error Html 
//5. Not found page 
//6. Stats -> Hits of each page,


