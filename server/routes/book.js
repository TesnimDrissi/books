const express = require('express')
const router=express.Router()

const {retrieveAll,createBook,updateBook,deleteBook} = require ('../controllers/book')

router.get('/getAll',retrieveAll)
router.post('/create',createBook)

router.put('/:idbook',updateBook)
router.delete('/:id', deleteBook)

module.exports = router