const connection = require ('../index')


module.exports ={
 
    retrieve: function(callback){
        const syntax = 'select * from book '
        connection.query(syntax, function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    },

    create : function(callback,values){
        const syntax = 'insert into book set name =?,category=?,price=? , description=? , image =? '
        connection.query(syntax,[values.name,values.category,values.price,values.description, values.image], function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    },

    update : function(callback,values , id){
        const syntax = 'update book set name =? , category=? , price=?  ,  description=? ,  image =? where idbook=? '
        connection.query(syntax,[values.name,values.category,values.price,values.description, values.image, id], function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    },
    

    delete : function(callback,id){
        const syntax = 'delete from book where idbook=? '
        connection.query(syntax,[id], function(error,results){
          if(error)callback(error,null)
          if(results) callback(null,results)
        })
    }


}