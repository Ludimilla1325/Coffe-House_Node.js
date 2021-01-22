const express = require ('express')
const router = express.Router()

router.get('/',(req, res, next) =>{
    const data = req.context //the context contain the global.json
    res.render('home',data)
})

    router.get('/blog',(req, res, next) => {
        const data = req.context
        res.render('../views/blog',data)
    })


module.exports = router