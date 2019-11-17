const express = require('express');
const router = express.Router();

router.get('/team', function (req, res, next) {
  // 设置中文编码方式
  res.writeHead(200,{'Content-Type': 'text/plain; charset=UTF-8'});
  res.end('测试个人接口');
})

module.exports = router;