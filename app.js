var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser")
var session = require("express-session")

//模板请求资源js/store.js   自动去  public/js 文件去找

//cnpm iexpress    body-parser   cookie-parser   express-session -S


//res.    send(字符串)    redirect(重定向)   render_ejs(返回模板，服务器渲染)    json(前端渲染)

//静态资源站
//token

//var jwt = require("jsonwebtoken")
//生成token
/*
    let secretOrPr = "qwaxzcsadf"//随机字符串
    var token = jwt.sign(
        {uname:"Msea",xxx:xxx},//账号密码
        secretOrPr,//随机字符串
        {
            expiresIn:"8000",//时效
        }
    )
//效验token
    let token = "ascasrdfasd"
    jwt.verify(token,secretOrPr,(err,decode)=>{
        console.log(err);//失败   
        console.log(decode);//成功
    })
*/
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret:"asdasdqwefdsfa",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000 * 10
    }
}))

app.set("views",__dirname + "views"); //默认自动去  找view
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("ok");
})
app.listen(8081)