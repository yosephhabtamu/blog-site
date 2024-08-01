const comment = require('../models/comment')
module.exports = async (req,res)=>{
   const id = req.params.id
   const postcomment = req.body;
   await comment.create({
      username:userName,
      id: id,
      message: postcomment.message
   },(error,comment) =>{
      if(error){
         
        res.redirect('/auth/login')
      }
      else{ res.redirect(`/post/${id}`)}  
      })
   
}

