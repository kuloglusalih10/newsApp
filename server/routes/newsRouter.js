const express = require('express');
const { getAllnews } = require('../controllers/newsController');
const router = express.Router();


router.post('/', getAllnews);

router.get('/test' ,(req,res)=>{
    res.send('test sayfası');
})

 module.exports = router