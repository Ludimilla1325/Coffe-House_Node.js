const express = require ('express')
const router = express.Router()

router.get('/',(req, res, next) =>{
    const data = {
        title:" Ludi's Coffe House",
        description:"Welcome to our Coffe house! Enjoy it"
    }

    res.render('home',data)
})

    router.get('/blog',(req, res, next) => {
        const data = {
            title:"Ludi's Coffe House",
            description:"Welcome to our Coffe house! Enjoy it"
        }
        res.render('../views/blog',data)
    })


module.exports = router