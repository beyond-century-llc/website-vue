//导入express模块
const express = require("express")
//创建服务器实例
const server = express()

//解决跨域问题
//CORS
//npm i cors
//调用路由注册中间件
const cors=require("cors")
server.use(cors())

//解析请求体
server.use(express.json())//解析json格式 raw-json
server.use(express.urlencoded({extended:false}))//解析键值对格式 x-www-form-urlencoded

//加载路由模块
const router = require("./router/index.js")
//注册路由模块中间件
server.use("/api", router)//统一设置接口前缀 访问需要添加/api 例如 127.0.0.1/api/user

//启动服务器 监听8090端口
server.listen(8090, () => {
    console.log("express server running in http://127.0.0.1:8090")
})
