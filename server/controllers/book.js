const book = require ('../database/models/book')
const cloudinary = require ('../cloudinary/config')

module.exports ={
  
    retrieveAll : function(req, res){
       book.retrieve(function(error, results){
           if(error) res.status(500).send(error)
           if(results) res.json(results)
       })
    },

    createBook : function(req, res){
        console.log(req.body);
        book.create(function(error, results){
            if(error) res.status(500).send(error)
            if(results) res.json(results)
        },req.body)
     },

     updateBook : function(req, res){
        book.update(function(error, results){
            if(error) res.status(500).send(error)
            if(results) res.json(results)
        },req.body,req.params.idbook)
     },

     deleteBook : function(req, res){
        book.delete(function(error, results){
            if(error) res.status(500).send(error)
            if(results) res.json(results)
        },req.params.id)
     },

}