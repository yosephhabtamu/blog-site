const comment = require('../models/comment')
module.exports = async (req,res)=>{
   const id = req.params.id
   const postcomment = req.body
   // console.log(postcomment)
   // console.log('^^^^^^^^^^^^^^^^^^^^^')
   // console.log(username)
   // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
   // console.log(id)
   await comment.create({
      username:username,
      id: id,
      message: postcomment.message
   },(error,comment) =>{
      // console.error('............................................', error)
      if(error){
         
        res.redirect('/auth/login')
      }
      else{ res.redirect(`/post/${id}`)}

     
      })
   
}

