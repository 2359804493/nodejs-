const express=require("express");
const pool=require("../pool");
const router=express.Router();

//获取轮播图
router.get("/banner",(req,res)=>{
    var sql=`SELECT * FROM index_carousel`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:result})
        }else{
            res.send({code:-1})
        }
    })
})
module.exports=router;