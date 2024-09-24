const express = require('express');
const router = express.Router();
const azer = require('../controller/azercontrol');


router.get('/', azer.a);

router.get('/b', azer.b);

router.get('/c', azer.c);

router.get('/d', azer.d);

router.get('/e', azer.e);

module.exports = router;