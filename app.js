//使用express构建服务器
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors")

//引入路由模块
const article=require("./routes/article");
const img=require("./routes/img");

var app=express();
app.listen(6000,()=>{
    console.log("创建成功,你的服务器运行在localhost:6000")
})

//托管静态资源
app.use(express.static('../static'));
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(cors({
    origin:"*",
    credentials:true,
    methods: ['GET','POST']
}))

//使用路由器来管理路由
app.use("/article",article);
app.use("/img",img);