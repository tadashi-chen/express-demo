const router = require('express').Router();

//路由GET请求
router.post('/ajax', (req, res) => {
	res.send({ msg: 'You sent the message:' + req.body.sendMsg });
});

//路由POST请求
router.get('/ajax', (req, res) => {
	res.send({ msg: 'You sent the message:' + req.query.sendMsg });
});

module.exports = router;