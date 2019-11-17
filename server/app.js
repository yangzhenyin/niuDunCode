// 引入 express
const express =  require('express');
// 声明 app
const app = express();
// 引入路由
const goodsRouter = require('./router/goods.js');
const teamRouter = require('./router/team.js');

// 设置 cors，允许所有端口跨域
app.all('*', function(req, res, next) {
  // CORS配置
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 挂载路由
app.use(goodsRouter);
app.use(teamRouter);

// 设置监听端口
app.listen(3000, function () {
  console.log('接口服务已启动，访问端口地址: 3000');
})