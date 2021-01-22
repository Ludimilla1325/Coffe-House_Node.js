const express = require ('express')
const router = express.Router()

router.get('/',(req, res, next) =>{
    res.render('home',req.context) //context contain the global.json
})

    router.get('/blog',(req, res, next) => {
        res.render('../views/blog',req.context)
    })


module.exports = router