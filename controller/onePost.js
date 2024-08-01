const blogPost = require('../models/blogpost')
const comment = require('../models/comment')

module.exports = async (req,res)=>{
    const id = req.params.id
    const blogpost = await blogPost.findOne({_id:id})
    const comments = await comment.find({id:id})
    await res.render('post', {blogpost, id, comments, userName:userPayload?.userName
    })
}