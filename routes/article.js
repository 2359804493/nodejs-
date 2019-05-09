const express=require("express");
const pool=require("../pool");
const router=express.Router();

//获取轮播图
router.get("/articeList",(req,res)=>{
    var sql=`SELECT * FROM article`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:result})
            res.send(res)
        }else{
            res.send({code:-1})
        }
    })
})
module.exports=router;