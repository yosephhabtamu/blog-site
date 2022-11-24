const comment = require('../models/comment')
module.exports = async (req,res)=>{
   const id = req.params.id
   const postcomment = req.body

   try {
      
      if (postcomment.message === ''){
        return res.redirect(`/post/${id}`) 
      }
      await comment.findOneAndUpdate({
         username:userPayload?.userName,id},
         {
         username:userPayload?.userName,
         id: id,
         message: postcomment.message
      },
      {upsert:true})
      res.redirect(`/post/${id}`)
      
   } catch (error) {
         res.redirect(`/auth/register`)
   
   }
   
   
}

