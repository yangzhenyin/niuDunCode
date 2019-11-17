// 引入 express
const express =  require('express');
// 声明路由
const router = express.Router();
// 引入 JSON 文件
const goodsData = require('../mock/goods.json');

// 挂在路由,设置访问接口名称 /goods
router.get('/goods', function (req, res, next) {
  // 响应报文数据
  res.json(goodsData);
})

module.exports = router;